import { axiosClient } from '@/config'
import { ONE_WEEK, THIRTY_DAYS } from '@/constants/duration'
import { StorageKeys } from '@/constants/storage'
import { IAPIResponse } from '@/interfaces/api'
import { ICountry } from '@/interfaces/api/teams'
import { localStorageService } from '@/services/storage'

class TeamsService {
  getCountries = async () => {
    const countries = localStorageService.get(StorageKeys.countries) as ICountry[]
    if (countries) {
      return countries
    }

    const { data } = await axiosClient.get<IAPIResponse<ICountry[]>>('/teams/countries')
    localStorageService.set(StorageKeys.countries, data.response, ONE_WEEK)
    return data.response
  }

  setFavouriteCountry = (name: string) => {
    let favouriteCountries = this.getFavouriteCountries()

    if (!favouriteCountries) {
      favouriteCountries = [name]
    } else if (Array.isArray(favouriteCountries)) {
      if (!favouriteCountries.includes(name)) {
        favouriteCountries.push(name)
      } else {
        this.removeFavouriteCountry(name)
        return
      }
    }

    localStorageService.set(StorageKeys.favouriteCountries, favouriteCountries, THIRTY_DAYS)
  }

  getFavouriteCountries = () => {
    return localStorageService.get(StorageKeys.favouriteCountries)
  }

  removeFavouriteCountry = (name: string) => {
    let favouriteCountries = this.getFavouriteCountries()

    if (Array.isArray(favouriteCountries) && favouriteCountries.includes(name)) {
      favouriteCountries = favouriteCountries.filter((country) => country !== name)
      localStorageService.set(StorageKeys.favouriteCountries, favouriteCountries, THIRTY_DAYS)
    }
  }
}

export const teamsService = new TeamsService()
