import React, { useState } from 'react'
import { trpc } from '../trpc'

export const CreateUser = () => {
  const [id, setId] = useState(Date.now().toString())
  const [name, setName] = useState('')
  const { mutate } = trpc.user.createUser.useMutation()

  const createUser = async () => {
    await mutate({ id, name })
    setId(Date.now().toString())
    setName('')
  }

  return (
    <div className='mt-10'>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='border-2 border-gray-300 p-2'
      />
      <button
        onClick={createUser}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Create user
      </button>
    </div>
  )
}
