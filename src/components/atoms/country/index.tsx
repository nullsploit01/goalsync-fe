import { FC } from 'react'

import defaultImage from '@/assets/images/default.webp'

interface ICountryProps {
  name: string
  code: string
  flag: string
}

const Country: FC<ICountryProps> = ({ name, code, flag }) => {
  return (
    <div className="m-10 cursor-pointer bg-gray-50 p-4 text-center">
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
