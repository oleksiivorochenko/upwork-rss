import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateJobTable implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        return await queryRunner.createTable(new Table({
            name: "jobs",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "title",
                    type: "text",
                    isNullable: true,
                },
                {
                    name: "link",
                    type: "text",
                    isNullable: true
                },
                {
                    name: "description",
                    type: "text",
                    isNullable: true
                },
                {
                  name: "pubDate",
                  type: "date",
                  isNullable: true
              }
            ]
        }), true);
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
        return await queryRunner.dropTable("jobs");
    }

}