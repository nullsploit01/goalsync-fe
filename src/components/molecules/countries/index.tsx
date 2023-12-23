import { FC } from 'react'

import Country from '@/components/atoms/country'
import { Skeleton } from '@/components/ui/skeleton'
import { ICountry } from '@/interfaces/api/teams'

interface ICountriesProps {
  countries: ICountry[] | undefined
}

const Countries: FC<ICountriesProps> = ({ countries }) => {
  return (
    <div className="flex flex-wrap content-center">
      {countries ? (
        countries.map((country, index) => {
          return <Country name={country.name} flag={country.flag} code={country.code} key={index} />
        })
      ) : (
        <Skeleton className="w-[1000px] h-[20px] rounded-full" />
      )}
    </div>
  )
}

export default Countries
