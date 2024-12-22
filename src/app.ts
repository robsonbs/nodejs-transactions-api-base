import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoutes } from './routes/transactions'

// Register routes
export const app = fastify()

// Register cookie plugin routes
app.register(cookie)
// Register routes for transactions
app.register(transactionsRoutes, { prefix: 'transactions' })
