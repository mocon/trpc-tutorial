import { inferAsyncReturnType } from '@trpc/server'
import { CreateExpressContextOptions } from '@trpc/server/adapters/express'

// TODO: Replace with actual session logic
const getSession = async (token: string | null) => {
  if (!token) return null

  return await {
    userId: '42',
    user: 'mocon',
    role: 'user',
    region: 'us-ca',
  }
}

export const createContext = async ({ req, res }: CreateExpressContextOptions) => {
  const token = typeof req.headers['x-session'] === 'string' ? req.headers['x-session'] : null
  const session = await getSession(token)

  return {
    session,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
