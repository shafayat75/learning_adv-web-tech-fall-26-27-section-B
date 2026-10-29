import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEmployees1793300000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "employees" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "email" VARCHAR NOT NULL,
        "phone" VARCHAR NOT NULL,
        "password" VARCHAR NOT NULL,
        "age" INTEGER NOT NULL,
        "years_of_working" INTEGER NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE "employees"
    `);
  }
}