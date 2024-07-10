import { logger } from '@activepieces/server-shared'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class addNotificationsStatus1680563747425 implements MigrationInterface {
    name = 'addNotificationsStatus1680563747425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        logger.info('Running migration: addNotificationsStatus1680563747425')
        await queryRunner.query(
            'ALTER TABLE "project" ADD "notifications" character varying',
        )
        await queryRunner.query(
            'UPDATE "project" SET "notifications" = \'ALWAYS\'',
        )
        logger.info('Completed migration: addNotificationsStatus1680563747425')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'ALTER TABLE "project" DROP COLUMN "notifications"',
        )
    }
}
