import { type Form } from '../../components/form/form'
import { type Input } from '../../components/input/input'
import { type MessageInput } from '../../components/messageInput/messageInput'
import { type PasswordAgainInput } from '../../components/passwordAgainInput/passwordAgainInput'

import {
  RESET_ERRORS,
  VALIDATE,
  VALIDATE_ALL,
  VALIDATE_MESSAGE,
  VALIDATE_PASSWORD_AGAIN
} from './actions'

export const validate = (input: Input) => ({ type: VALIDATE, payload: input })

export const validateAll = (form: Form) => ({
  type: VALIDATE_ALL,
  payload: form
})

export const validateMessage = (messageInput: MessageInput) => ({
  type: VALIDATE_MESSAGE,
  payload: messageInput
})

export const validatePasswordAgain = (messageInput: PasswordAgainInput) => ({
  type: VALIDATE_PASSWORD_AGAIN,
  payload: messageInput
})

export const resetErrors = () => ({ type: RESET_ERRORS })
