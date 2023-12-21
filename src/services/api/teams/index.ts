import { axiosClient } from '@/config'
import { IAPIResponse } from '@/interfaces/api'
import { ICountry } from '@/interfaces/api/teams'

class TeamsService {
  getCountries = async () => {
    const { data } = await axiosClient.get<IAPIResponse<ICountry[]>>('/teams/countries')
    return data.response
  }
}

export const teamsService = new TeamsService()
