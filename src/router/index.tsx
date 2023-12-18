import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import ErrorBoundary from '@/components/error-boundry'

const HomePage = lazy(() => import('@/pages/home'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorBoundary />
  }
])
