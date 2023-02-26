import { router, publicProcedure } from '../trpc'
import { z } from 'zod'

export const userRouter = router({
  getUser: publicProcedure
    .input(
      z
        .object({
          id: z.string(),
        })
        .optional(),
    )
    .query(({ input }) => {
      // TODO: Get user from database
      return {
        id: input?.id ?? '2',
        name: 'mocon',
      }
    }),
  createUser: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
      }),
    )
    .mutation(({ input }) => {
      return {
        ...input,
      }
    }),
})
