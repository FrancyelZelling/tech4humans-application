import {MigrationInterface, QueryRunner} from "typeorm";

export class addedCityNameAndChangeTypeNumber1633784238367 implements MigrationInterface {
    name = 'addedCityNameAndChangeTypeNumber1633784238367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cities" ADD "city_name" character varying NOT NULL DEFAULT 'null'`);
        await queryRunner.query(`ALTER TABLE "cities" DROP COLUMN "last_searched"`);
        await queryRunner.query(`ALTER TABLE "cities" ADD "last_searched" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cities" DROP COLUMN "last_searched"`);
        await queryRunner.query(`ALTER TABLE "cities" ADD "last_searched" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cities" DROP COLUMN "city_name"`);
    }

}
