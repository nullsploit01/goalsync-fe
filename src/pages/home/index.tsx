import { AxiosError } from 'axios'
import { useEffect } from 'react'

import Layout from '@/components/layout'
import useNotification from '@/hooks/use-notification'
import { teamsService } from '@/services/api/teams'

const HomePage = () => {
  const { showErrorNotification } = useNotification()
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const countries = await teamsService.getCountries()
      return countries
    } catch (err: any) {
      if (!(err instanceof AxiosError)) {
        showErrorNotification('Something Went Wrong', err.message)
      }
    }
  }

  return (
    <Layout>
      <div className="flex justify-center h-52">Coming Soon!</div>
    </Layout>
  )
}

export default HomePage
