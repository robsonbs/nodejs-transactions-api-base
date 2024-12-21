import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  // alter table add column session-id with index after id
  await knex.schema.alterTable('transactions', (table) => {
    table.uuid('session_id').after('id').index()
  })
}

export async function down(knex: Knex): Promise<void> {
  // remove column session-id from table
  await knex.schema.alterTable('transactions', (table) => {
    table.dropColumn('session_id')
  })
}
