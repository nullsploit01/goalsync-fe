import { axiosClient } from '@/config'
import { ONE_WEEK } from '@/constants/duration'
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
}

export const teamsService = new TeamsService()
