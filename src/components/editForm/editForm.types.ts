import { type Button } from '../button/button'
import { type EditFormItem } from '../editFormItem/editFormItem'

export interface EditFormPropsType {
  forPassword?: boolean
  items: EditFormItem[]
  button: Button
}
