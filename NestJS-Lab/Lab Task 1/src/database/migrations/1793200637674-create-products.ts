import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProducts1793200637674 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "products" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR NOT NULL,
        "category" VARCHAR NOT NULL,
        "price" DECIMAL NOT NULL,
        "quantity" INTEGER NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE "products"
    `);
  }
}