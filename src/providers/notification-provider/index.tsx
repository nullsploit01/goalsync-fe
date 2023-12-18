import { INotificationContext, INotificationProvider } from './interface'
import { createContext, FC, useCallback } from 'react'

import { useToast } from '@/components/ui/use-toast'

export const NotificationContext = createContext<INotificationContext>({} as INotificationContext)

export const NotificationProvider: FC<INotificationProvider> = ({ children }) => {
  const { toast } = useToast()

  const showErrorNotification = (title: string, description: string) => {
    showNotification(title, description, 'destructive')
  }

  const showSuccessNotification = (title: string, description: string) => {
    showNotification(title, description)
  }

  const showNotification = (
    title: string,
    description: string,
    variant: 'default' | 'destructive' = 'default'
  ) => {
    toast({
      variant,
      title,
      description
    })
  }

  const contextValue = {
    showErrorNotification: useCallback(
      (title: string, description: string) => showErrorNotification(title, description),
      []
    ),
    showSuccessNotification: useCallback(
      (title: string, description: string) => showSuccessNotification(title, description),
      []
    )
  }

  return (
    <NotificationContext.Provider value={contextValue}>{children}</NotificationContext.Provider>
  )
}
