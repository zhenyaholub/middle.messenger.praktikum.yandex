import { type Form } from '../../components/form/form'
import { authApi } from '../../services/auth/auth'
import { type UserDataType } from '../../services/auth/auth.types'
import {
  getFormData,
  getIsFormValid,
  isSuccessStatusCode
} from '../../utils/helpers'
import { router } from '../../utils/router'
import { MESSENGER, SIGN_IN } from '../../utils/urls'
import { type AsyncActionType } from '../store.types'
import { SET_USER_DATA } from './actions'

export const signUp =
  (form: Form): AsyncActionType =>
    async (dispatch) => {
      const formData = getFormData(form)

      const isValid = getIsFormValid(formData)

      delete formData.password_again

      if (isValid) {
        const { status, response } = await authApi.create(
          formData as never as UserDataType
        )

        if (isSuccessStatusCode(status)) {
          dispatch(setUserData({ id: JSON.parse(response) }))
          router.go(MESSENGER)
        }
      }
    }

export const signIn =
  (form: Form): AsyncActionType =>
    async (dispatch, getState) => {
      const formData = getFormData(form)

      const isValid = getIsFormValid(formData)

      if (isValid) {
        const { status } = await authApi.login(formData as never as UserDataType)

        if (isSuccessStatusCode(status)) {
          router.go(MESSENGER)
        }
      }
    }

export const getUserData = (): AsyncActionType => async (dispatch) => {
  const { status, response } = await authApi.get()

  if (isSuccessStatusCode(status)) {
    dispatch(setUserData({ ...JSON.parse(response) }))
  } else {
    router.go(SIGN_IN)
  }
}

export const logout = (): AsyncActionType => async () => {
  const { status } = await authApi.logout()

  if (isSuccessStatusCode(status)) {
    router.go(SIGN_IN)
  }
}

export const setUserData = (data: any) => ({
  type: SET_USER_DATA,
  payload: data
})
