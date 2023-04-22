import { type EditFormInput } from '../editFormInput/editFormInput'
import { type ErrorMessage } from '../errorMessage/errorMessage'

export interface EditFormItemPropsType {
  name: string
  key: string
  input: EditFormInput
  errorMessage: ErrorMessage
}
