import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { trpc } from './trpc'
import './index.scss'

const AppContent = () => {
  const { data, isFetching, error } = trpc.user.getUser.useQuery({ id: '42' })

  return (
    <div className='mt-10 text-3xl mx-auto max-w-6xl'>
      <pre>
        <code>{JSON.stringify(data)}</code>
      </pre>
    </div>
  )
}

const App = () => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:8080/trpc',
          headers: {
            'Content-Type': 'application/json',
          },
        }),
      ],
    }),
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </trpc.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
