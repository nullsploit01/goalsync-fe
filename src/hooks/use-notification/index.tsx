import { useContext } from 'react'

import { NotificationContext } from '@/providers/notification-provider'

const useNotification = () => {
  const { showErrorNotification, showSuccessNotification } = useContext(NotificationContext)
  return { showErrorNotification, showSuccessNotification }
}

export default useNotification
