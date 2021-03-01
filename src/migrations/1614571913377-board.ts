import {MigrationInterface, Table, QueryRunner, TableIndex} from "typeorm";

export class board1614571913377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "boards",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "varchar",
                }
            ]
        }), true)

        await queryRunner.createIndex("boards", new TableIndex({
            name: "IDX_QUESTION_TITLE",
            columnNames: ["title"]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("boards", "IDX_QUESTION_TITLE");
        await queryRunner.dropTable("boards");
    }

}
