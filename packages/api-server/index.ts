import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors'
import { createContext } from './context'
import { appRouter } from './routers'

export type AppRouter = typeof appRouter

const app = express()
const port = 8080

app.use(cors())

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
)

app.get('/', (req, res) => {
  res.send('Hello from api-server')
})

app.listen(port, () => {
  console.log(`api-server listening at http://localhost:${port}`)
})
