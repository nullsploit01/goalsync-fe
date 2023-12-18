import { RouterProvider } from 'react-router-dom'

import { Toaster } from '@/components/ui/toaster'
import { AxiosInterceptor } from '@/config/axios'
import { NotificationProvider } from '@/providers/notification-provider'
import { router } from '@/router'

const App = () => {
  return (
    <NotificationProvider>
      <AxiosInterceptor>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </AxiosInterceptor>
    </NotificationProvider>
  )
}

export default App
