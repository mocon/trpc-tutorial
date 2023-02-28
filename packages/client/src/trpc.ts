import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from 'api-server/src'

export const trpc = createTRPCReact<AppRouter>()
