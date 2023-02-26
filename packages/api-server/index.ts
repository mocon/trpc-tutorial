import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors'
import { t } from './trpc'
import { createContext } from './context'
import { userRouter, postRouter } from './routers'

const appRouter = t.router({
  user: userRouter,
  post: postRouter,
})

export type AppRouter = typeof appRouter

const app = express()
app.use(cors())
const port = 8080

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
