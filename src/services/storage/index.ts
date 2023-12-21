import ttlLocalStorage from 'localstorage-ttl'

import { ONE_HOUR } from '@/constants/duration'

class StorageService {
  private isSessionStorage = false

  constructor(isSessionStorage = false) {
    if (isSessionStorage) {
      this.isSessionStorage = true
    }
  }

  set = (key: string, value: any, ttl = ONE_HOUR) => {
    if (this.isSessionStorage) {
      value = JSON.stringify(value)
      return sessionStorage.setItem(key, value)
    }

    return ttlLocalStorage.set(key, value, ttl)
  }

  get = (key: string) => {
    if (this.isSessionStorage) {
      const value = sessionStorage.getItem(key)
      if (!value) {
        return null
      }

      return JSON.parse(value)
    }

    return ttlLocalStorage.get(key)
  }

  remove = (key: string) => {
    if (this.isSessionStorage) {
      return sessionStorage.removeItem(key)
    }

    return localStorage.removeItem(key)
  }

  clear = () => {
    if (this.isSessionStorage) {
      return sessionStorage.clear()
    }

    return localStorage.clear()
  }
}

const localStorageService = new StorageService()
const sessionStorageService = new StorageService(true)

export { localStorageService, sessionStorageService }
