import { type Button } from '../button/button'
import { type EditFormInput } from '../editFormInput/editFormInput'

export interface EditFormPropsType {
  forPassword?: boolean
  items: EditFormInput[]
  button: Button
}
