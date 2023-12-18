import { axiosClient } from '@/config'

class TeamsService {
  getCountries = () => {
    return axiosClient.get('/teams/countries')
  }
}

export const teamsService = new TeamsService()
