import { ChangeEvent, FC, useState } from 'react'

import { Input } from '@/components/ui/input'

interface ISearchBarProps {
  placeholder: string
  autoFocus?: boolean
  onChange: (value: string) => void
}

const SearchBar: FC<ISearchBarProps> = ({ placeholder, onChange, autoFocus = false }) => {
  const [_searchQuery, setSearchQuery] = useState<string>('')

  const onSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value

    onChange(searchQuery)
    setSearchQuery(searchQuery)
  }

  return (
    <Input
      autoFocus={autoFocus}
      type="search"
      value={_searchQuery}
      placeholder={placeholder}
      onChange={onSearchQueryChange}
    />
  )
}

export default SearchBar
