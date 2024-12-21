import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

// setup knex configuration and connect to the database
export const config: Knex.Config = {
  // connect to sqlite database
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true, // Use null as the default value for non-integer types (e.g., boolean, string)

  // migrations configuration
  migrations: {
    directory: './database/migrations',
  },
  seeds: {
    directory: './database/seeds',
  },
}

// create and export the knex instance
export const knex = setupKnex(config)
