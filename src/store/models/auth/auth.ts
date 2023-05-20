import { authApi } from '../../../services/auth/auth'
import { type UserDataType } from '../../../services/auth/auth.types'

class AuthModel {
  create (body: UserDataType) {
    const res = authApi.create(body)
    console.log(res)
  }

  login () {}

  get () {}

  logout () {}
}

export const authModel = new AuthModel()
