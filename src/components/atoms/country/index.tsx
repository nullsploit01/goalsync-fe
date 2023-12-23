import { FC } from 'react'

import defaultImage from '@/assets/images/default.webp'

interface ICountryProps {
  name: string
  code: string
  flag: string
}

const Country: FC<ICountryProps> = ({ name, code, flag }) => {
  return (
    <div className="w-48 h-24 m-20">
      <img
        src={flag ?? defaultImage}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src = defaultImage
        }}
      />
      <>
        {name} {code && `${code}`}
      </>
    </div>
  )
}

export default Country
