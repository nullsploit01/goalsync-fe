import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { axiosClient } from '@/config'

const HomePage = lazy(() => import('@/pages/home'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    loader: async () => {
      return await axiosClient.get('/standings?league=39&season=2023')
    }
  }
])
