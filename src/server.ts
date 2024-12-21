import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

// Register routes
const app = fastify()

// Register cookie plugin routes
app.register(cookie)
// Register routes for transactions
app.register(transactionsRoutes, { prefix: 'transactions' })

// Start server on the given port, default is 3000
app.listen({ port: env.PORT }).then(() => {
  console.log('Server is running on port 3000')
})
