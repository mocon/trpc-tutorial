import React from 'react'
import { trpc } from '../trpc'

type Props = {
  id: string
}

export const GetUser = ({ id }: Props) => {
  const { data, isFetching, error } = trpc.user.getUser.useQuery({ id })

  if (isFetching) return <div>Loading...</div>

  if (error) return <div>{error.message}</div>

  return (
    <div className='mt-10 text-3xl mx-auto max-w-6xl'>
      <pre>
        <code>{JSON.stringify(data)}</code>
      </pre>
    </div>
  )
}
