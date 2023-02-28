import { initTRPC, TRPCError } from '@trpc/server'
import { Context } from './context'
import superjson from 'superjson'

export const t = initTRPC.context<Context>().create({ transformer: superjson })

export const router = t.router

export const middleware = t.middleware

export const publicProcedure = t.procedure

const isUser = middleware(async ({ ctx, next }) => {
  if (ctx.session?.role !== 'user') throw new TRPCError({ code: 'UNAUTHORIZED' })

  return next({ ctx })
})

export const userProcedure = publicProcedure.use(isUser)

const isAdmin = middleware(async ({ ctx, next }) => {
  if (ctx.session?.role !== 'admin') throw new TRPCError({ code: 'UNAUTHORIZED' })

  return next({ ctx })
})

export const adminProcedure = publicProcedure.use(isUser)
