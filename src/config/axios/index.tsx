import axios, { AxiosError, AxiosResponse, HttpStatusCode } from 'axios'
import { FC, ReactNode, useEffect, useState } from 'react'

import useNotification from '@/hooks/use-notification'

interface IAxiosInterceptorProps {
  children: ReactNode
}

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

const AxiosInterceptor: FC<IAxiosInterceptorProps> = ({ children }) => {
  const { showErrorNotification } = useNotification()
  const [_isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const responseInterceptor = (response: AxiosResponse) => {
      return response
    }

    const getDescription = (data: any) => {
      return typeof data?.error === 'string' ? data.error : 'Please try again'
    }

    const errorInterceptor = (error: AxiosError) => {
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest: {
          showErrorNotification('400 Server Error', getDescription(error.response?.data))
          break
        }

        case HttpStatusCode.NotFound: {
          showErrorNotification('404 Server Error', getDescription(error.response?.data))
          break
        }

        case HttpStatusCode.InternalServerError: {
          showErrorNotification('500 Server Error', getDescription(error.response?.data))
          break
        }

        default: {
          showErrorNotification('Something Went Wrong', getDescription(error.response?.data))
          break
        }
      }

      return Promise.reject(error)
    }

    setIsMounted(true)
    const interceptor = axiosClient.interceptors.response.use(responseInterceptor, errorInterceptor)

    return () => axiosClient.interceptors.response.eject(interceptor)
  }, [])

  return _isMounted && children
}

export { axiosClient, AxiosInterceptor }
