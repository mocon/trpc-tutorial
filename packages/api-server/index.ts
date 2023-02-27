import express from 'express'
import cors from 'cors'
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { createContext } from './context'
import { appRouter as router } from './routers'

export type AppRouter = typeof router

const app = express()
const port = 8080

app.use(cors())

app.use('/trpc', createExpressMiddleware({ router, createContext }))

app.get('/', (req, res) => {
  res.send('Hello from api-server')
})

app.listen(port, () => {
  console.log(`api-server listening at http://localhost:${port}`)
})
