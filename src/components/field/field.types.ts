import { type Input } from '../input/input'
import { type Label } from '../label/label'

import { type ErrorMessage } from '../errorMessage/errorMessage'

export interface FieldPropsType {
  label: Label
  input: Input
  style?: string
  name: string
  errorMessage: ErrorMessage
}
