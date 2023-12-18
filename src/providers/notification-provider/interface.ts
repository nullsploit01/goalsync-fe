import { ReactNode } from 'react'

export interface INotificationContext {
  showErrorNotification: (title: string, description: string) => void
  showSuccessNotification: (title: string, description: string) => void
}

export interface INotificationProvider {
  children: ReactNode
}
