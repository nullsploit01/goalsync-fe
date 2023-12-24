import { AxiosError } from 'axios'
import { useEffect, useRef, useState } from 'react'

import Layout from '@/components/layout'
import Countries from '@/components/molecules/countries'
import SearchBar from '@/components/molecules/search-bar'
import { Separator } from '@/components/ui/separator'
import useNotification from '@/hooks/use-notification'
import { ICountry } from '@/interfaces/api/teams'
import { teamsService } from '@/services/api/teams'

const HomePage = () => {
  const _countries = useRef<ICountry[]>([])
  const [_loading, setLoading] = useState<boolean>()

  const [_searchResults, setSearchResults] = useState<ICountry[]>()

  const { showErrorNotification } = useNotification()
  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = async () => {
    try {
      setLoading(true)
      const countries = await teamsService.getCountries()
      _countries.current = countries
      setSearchResults(countries)
    } catch (err: any) {
      if (!(err instanceof AxiosError)) {
        showErrorNotification('Something Went Wrong', err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  const onCountryClick = (name: string) => {
    teamsService.setFavouriteCountry(name)
  }

  const onSearchQueryChange = (value: string) => {
    if (!value.trim()) {
      setSearchResults(_countries.current)
    }

    const filteredCountries = _countries.current?.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    )
    setSearchResults(filteredCountries)
  }

  return (
    <Layout>
      <div className="flex-col text-center justify-center p-10">
        <p className="text-3xl my-5">Select Country</p>
        <div className="w-full m-5 flex justify-end">
          <div className="w-4/12">
            <SearchBar autoFocus placeholder="Search Countries" onChange={onSearchQueryChange} />
          </div>
        </div>
        <Separator />
      </div>
      <div>
        {_searchResults?.length ? (
          <Countries
            loading={_loading}
            onCountryClick={onCountryClick}
            countries={_searchResults}
          />
        ) : (
          <div className="w-full text-center text-lg">No Countres Found!</div>
        )}
      </div>
    </Layout>
  )
}

export default HomePage
