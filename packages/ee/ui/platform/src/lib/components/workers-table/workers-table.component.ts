import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WorkerMachineStatus, WorkerMachineType } from '@activepieces/shared';
import { WorkersTableDataSource } from './workers-table.datasource';
import { WorkersService } from '../../service/workers.service';

@Component({
  selector: 'app-worker-machines-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ap-w-full ap-pt-2">
      <table
        mat-table
        [dataSource]="dataSource"
        class="ap-w-[100%]"
        i18n-aria-label
        aria-label="Workers"
      >
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef i18n>Id</th>
          <td mat-cell *matCellDef="let worker">{{ worker.id }}</td>
        </ng-container>

        <ng-container matColumnDef="cpuUsage">
          <th mat-header-cell *matHeaderCellDef i18n>CPU Usage</th>
          <td mat-cell *matCellDef="let worker">
            {{ worker.information.cpuUsagePercentage / 100 | percent }}
          </td>
        </ng-container>
        <ng-container matColumnDef="ramUsage">
          <th mat-header-cell *matHeaderCellDef i18n>RAM Usage</th>
          <td mat-cell *matCellDef="let worker">
            {{ worker.information.ramUsagePercentage / 100 | percent }}
          </td>
        </ng-container>
        <ng-container matColumnDef="totalRam">
          <th mat-header-cell *matHeaderCellDef i18n>Total RAM (MB)</th>
          <td mat-cell *matCellDef="let worker">
            {{
              worker.information.totalAvailableRamInBytes / 1048576
                | number : '1.0-0'
            }}
          </td>
        </ng-container>
        <ng-container matColumnDef="publicIp">
          <th mat-header-cell *matHeaderCellDef i18n>IP Address</th>
          <td mat-cell *matCellDef="let worker">{{ worker.information.ip }}</td>
        </ng-container>
        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef i18n>Status</th>
          <td mat-cell *matCellDef="let worker">
            {{ workerMachineStatusDisplayNames[worker.status] }}
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr
          mat-row
          [class.ap-hidden]="dataSource.isLoading$ | async"
          *matRowDef="let row; columns: displayedColumns"
        ></tr>
      </table>
      <ng-container *ngIf="(dataSource.isLoading$ | async) === true">
        <div
          class="ap-flex ap-items-center ap-justify-center ap-flex-grow ap-h-[500px]"
        >
          <ap-loading-icon
            height="50px"
            width="51px"
            [outlineLoader]="true"
            [whiteLoader]="false"
          >
          </ap-loading-icon>
        </div>
      </ng-container>
      <ng-container
        *ngIf="
          dataSource.data.length === 0 &&
          (dataSource.isLoading$ | async) === false
        "
      >
        <div
          class="ap-flex ap-items-center ap-justify-center ap-h-full ap-h-[500px] ap-py-8"
          i18n
        >
          No workers registered.
        </div>
      </ng-container>
    </div>
  `,
})
export class WorkerMachinesTableComponent {
  readonly displayedColumns = [
    'id',
    'cpuUsage',
    'ramUsage',
    'totalRam',
    'publicIp',
    'status',
  ];
  readonly workerMachineTypeDisplayNames: Record<any, string> = {
    [WorkerMachineType.DEDICATED]: $localize`Dedicated`,
    [WorkerMachineType.SHARED]: $localize`Shared`,
  };
  readonly workerMachineStatusDisplayNames: Record<any, string> = {
    [WorkerMachineStatus.ONLINE]: $localize`Online`,
    [WorkerMachineStatus.OFFLINE]: $localize`Offline`,
  };
  dataSource!: WorkersTableDataSource;
  constructor(private workersService: WorkersService) {
    this.dataSource = new WorkersTableDataSource(this.workersService);
  }
}
