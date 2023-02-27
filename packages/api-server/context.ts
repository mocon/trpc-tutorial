import { inferAsyncReturnType } from '@trpc/server'
import { CreateExpressContextOptions } from '@trpc/server/adapters/express'

// Created for each request
export const createContext = ({ req, res }: CreateExpressContextOptions) => ({
  user: 'mocon',
})

export type Context = inferAsyncReturnType<typeof createContext>
