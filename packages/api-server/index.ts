import express from 'express'
import { initTRPC } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors'
import { createContext, Context } from './context'

// Init tRPC
const t = initTRPC.context<Context>().create()
const router = t.router
const middleware = t.middleware
const publicProcedure = t.procedure

// Example router
const appRouter = router({
  hello: publicProcedure.query(() => 'Hello world!')
})

const app = express()
app.use(cors())
const port = 8080

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)

app.get('/', (req, res) => {
  res.send('Hello from api-server')
})

app.listen(port, () => {
  console.log(`api-server listening at http://localhost:${port}`)
})
