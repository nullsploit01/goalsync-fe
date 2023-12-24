import { FC } from 'react'

import Country from '@/components/atoms/country'
import { Skeleton } from '@/components/ui/skeleton'
import { ICountry } from '@/interfaces/api/teams'

interface ICountriesProps {
  countries?: ICountry[]
  loading?: boolean
  onCountryClick?: (name: string) => void
}

const Countries: FC<ICountriesProps> = ({ countries, onCountryClick, loading = false }) => {
  return (
    <div className="flex flex-wrap content-center justify-center">
      {!loading ? (
        countries?.map((country, index) => {
          return (
            <Country
              key={index}
              onClick={onCountryClick}
              name={country.name}
              flag={country.flag}
              code={country.code}
            />
          )
        })
      ) : (
        <Skeleton className="w-[1000px] h-[20px] rounded-full" />
      )}
    </div>
  )
}

export default Countries
