import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

// setup knex configuration and connect to the database
export const config: Knex.Config = {
  // connect to sqlite database
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite'
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABASE_URL,
  useNullAsDefault: true, // Use null as the default value for non-integer types (e.g., boolean, string)

  // migrations configuration
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
  seeds: {
    directory: './database/seeds',
  },
}

// create and export the knex instance
export const knex = setupKnex(config)
