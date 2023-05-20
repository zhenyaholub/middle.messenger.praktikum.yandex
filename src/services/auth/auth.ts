import { AUTH_URL } from '../../utils/endpoints'
import { HTTPTransport } from '../../utils/httpTransport'
import { type UserDataType } from './auth.types'

const authApiInstance = new HTTPTransport(AUTH_URL)

class AuthAPI {
  async create (body: UserDataType) {
    return await authApiInstance.post({ data: body }, '/signup')
  }

  async login (body: Pick<UserDataType, 'login' | 'password'>) {
    return await authApiInstance.post({ data: body }, '/signin')
  }

  async get () {
    return await authApiInstance.get({}, '/user')
  }

  async logout () {
    return await authApiInstance.post({}, '/logout')
  }
}

export const authApi = new AuthAPI()
