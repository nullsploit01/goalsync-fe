import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

import Layout from '@/components/layout'
import Countries from '@/components/molecules/countries'
import useNotification from '@/hooks/use-notification'
import { ICountry } from '@/interfaces/api/teams'
import { teamsService } from '@/services/api/teams'

const HomePage = () => {
  const [_countries, setCountries] = useState<ICountry[]>()

  const { showErrorNotification } = useNotification()
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const countries = await teamsService.getCountries()
      setCountries(countries)
    } catch (err: any) {
      if (!(err instanceof AxiosError)) {
        showErrorNotification('Something Went Wrong', err.message)
      }
    }
  }

  return (
    <Layout>
      <div className="flex justify-center text-3xl py-10">Select Country</div>
      <div>
        <Countries countries={_countries} />
      </div>
    </Layout>
  )
}

export default HomePage
