import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'

import defaultImage from '@/assets/images/default.webp'
import { teamsService } from '@/services/api/teams'

interface ICountryProps {
  name: string
  code: string
  flag: string
  onClick?: (name: string) => void
}

const Country: FC<ICountryProps> = ({ name, code, flag, onClick }) => {
  const [_refresh, setRefresh] = useState<boolean>()
  const [_favouriteCountries, setFavouriteCountries] = useState<string[] | null>()

  useEffect(() => {
    const favouriteCountries = teamsService.getFavouriteCountries() as string[] | null
    setFavouriteCountries(favouriteCountries)
  }, [_refresh])

  const onCountryClick = () => {
    onClick && onClick(name)
    setRefresh(!_refresh)
  }

  return (
    <div
      onClick={onCountryClick}
      className={clsx('m-10 cursor-pointer bg-gray-50 p-4 text-center', {
        'bg-green-600': _favouriteCountries?.includes(name)
      })}
    >
      <img
        className="h-24 w-40"
        src={flag ?? defaultImage}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = defaultImage
        }}
      />

      <div className="flex-wrap">
        {name} {code && `(${code})`}
      </div>
    </div>
  )
}

export default Country
