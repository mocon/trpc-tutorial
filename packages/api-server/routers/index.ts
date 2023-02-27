import { router } from '../trpc'
import { userRouter as user } from './user'
import { postRouter as post } from './post'

export const appRouter = router({
  user,
  post,
})
