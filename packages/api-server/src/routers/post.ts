import { router, publicProcedure } from '../trpc'
import { z } from 'zod'

export const postRouter = router({
  getPost: publicProcedure
    .input(
      z
        .object({
          id: z.string(),
        })
        .optional(),
    )
    .query(({ input }) => {
      // TODO: Get post from database

      return {
        id: input?.id ?? '42',
        title: 'First post',
      }
    }),
})
