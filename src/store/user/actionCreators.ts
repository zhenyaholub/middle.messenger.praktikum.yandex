import { type Form } from '../../components/form/form'
import { authApi } from '../../services/auth/auth'
import { type UserDataType } from '../../services/auth/auth.types'
import { getFormData, getIsFormValid } from '../../utils/helpers'
import { type AsyncActionType } from '../store.types'
import { SIGN_IN } from './actions'

export const signUp =
  (form: Form): AsyncActionType =>
    async (dispatch, getState) => {
      const formData = getFormData(form)

      const isValid = getIsFormValid(formData)

      delete formData.password_again

      if (isValid) {
        const res = await authApi.create(formData as never as UserDataType)
        console.log(res)
      }
    }

export const signIn = (form: Form) => ({
  type: SIGN_IN,
  payload: form
})
