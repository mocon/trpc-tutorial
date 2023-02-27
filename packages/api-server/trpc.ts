import { initTRPC, TRPCError } from '@trpc/server'
import { Context } from './context'
import superjson from 'superjson'

// Init tRPC
export const t = initTRPC.context<Context>().create({
  transformer: superjson,
})

export const router = t.router

export const middleware = t.middleware

// Default procedure for public data
export const publicProcedure = t.procedure

// Procedure for authenticated data
const isUser = middleware(async ({ ctx, next }) => {
  if (ctx.session?.role !== 'user') throw new TRPCError({ code: 'UNAUTHORIZED' })

  return next({ ctx })
})

export const authedProcedure = publicProcedure.use(isUser)
