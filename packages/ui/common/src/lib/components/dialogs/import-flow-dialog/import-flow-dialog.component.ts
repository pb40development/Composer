import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import {
  FlowOperationType,
  FlowTemplate,
  TelemetryEventName,
} from '@activepieces/shared';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { FlowService, TelemetryService } from '../../../service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';

type ImportTemplateWithoutExistingFlowData = { projectId: string };
type ImportFlowToOverwriteFlowData = { flowToOverwriteId: string };
export type ImporFlowDialogData =
  | ImportFlowToOverwriteFlowData
  | ImportTemplateWithoutExistingFlowData;

@Component({
  selector: 'ap-import-flow-dialog',
  templateUrl: './import-flow-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImportFlowDialogComponent {
  readonly INVALID_JSON_ERROR = 'INVALID_JSON_ERROR';
  fileControl = new FormControl<null | File>(null, {
    validators: Validators.required,
  });
  loading = false;
  importFLow$?: Observable<void>;
  showOverWritingFlowNote = false;
  removeInvalidJsonOnValueChanged$: Observable<unknown>;
  constructor(
    private matDialog: MatDialog,
    private flowService: FlowService,
    private telemetryService: TelemetryService,
    private router: Router,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA)
    public data: ImporFlowDialogData,
    private cd: ChangeDetectorRef
  ) {
    this.showOverWritingFlowNote = this.isOverwritingFlow(this.data);
    this.removeInvalidJsonOnValueChanged$ = this.fileControl.valueChanges.pipe(
      tap(() => {
        const errors = this.fileControl.errors;
        if (errors && errors[this.INVALID_JSON_ERROR]) {
          this.fileControl.setErrors({
            ...errors,
            [this.INVALID_JSON_ERROR]: undefined,
          });
        }
      })
    );
  }

  submit() {
    this.fileControl.markAsTouched();
    if (this.fileControl.valid) {
      this.readFile();
      this.loading = true;
    }
  }
  readFile() {
    if (this.fileControl.value === null) return;
    const reader = new FileReader();
    reader.onload = () => {
      const template: FlowTemplate = this.parseTemplateJson(
        reader.result as string
      );
      if (this.isOverwritingFlow(this.data)) {
        this.importFLow$ = this.importFlow(
          this.data.flowToOverwriteId,
          template,
          true
        );
      } else {
        this.importFLow$ = this.createFlow({
          displayName: template.name,
          projectId: this.data.projectId,
        }).pipe(switchMap((flow) => this.importFlow(flow.id, template, false)));
      }
      this.cd.markForCheck();
    };
    reader.readAsText(this.fileControl.value);
  }

  createFlow({
    displayName,
    projectId,
  }: {
    displayName: string;
    projectId: string;
  }) {
    return this.flowService.create({
      displayName,
      projectId,
    });
  }

  importFlow(
    flowToOverwriteId: string,
    template: FlowTemplate,
    insideTheBuilder: boolean
  ) {
    return this.flowService
      .update(flowToOverwriteId, {
        type: FlowOperationType.IMPORT_FLOW,
        request: {
          displayName: template.name,
          trigger: template.template.trigger,
        },
      })
      .pipe(
        tap((flow) => {
          this.matDialog.closeAll();
          this.captureEvent(insideTheBuilder);
          this.router.navigate(['flows', flow.id], {
            onSameUrlNavigation: 'reload',
          });
        })
      )
      .pipe(
        map(() => void 0),
        catchError((err: HttpErrorResponse) => {
          this.loading = false;
          if (err.status === HttpStatusCode.BadRequest) {
            this.fileControl.setErrors({
              [this.INVALID_JSON_ERROR]: true,
            });
          } else {
            this.snackBar.open(
              $localize`Unexpected error, please contact support`
            );
          }
          console.error(err);
          return of(void 0);
        })
      );
  }

  captureEvent(insideBuilder: boolean) {
    this.telemetryService.capture({
      name: TelemetryEventName.FLOW_IMPORTED_USING_FILE,
      payload: {
        location: insideBuilder ? 'inside the builder' : 'inside dashboard',
      },
    });
  }

  isOverwritingFlow(
    data: ImporFlowDialogData
  ): data is ImportFlowToOverwriteFlowData {
    return Object.keys(data).some((k) => k === 'flowToOverwriteId');
  }

  private parseTemplateJson(json: string) {
    try {
      return JSON.parse(json);
    } catch (e) {
      this.loading = false;
      this.cd.markForCheck();
      this.fileControl.setErrors({
        [this.INVALID_JSON_ERROR]: true,
      });
      throw e;
    }
  }
}
