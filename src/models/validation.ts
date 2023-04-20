import { type Input } from '../components/input/input'
import { type IMediator } from '../types/mediator'

import { validateInput } from '../utils/helpers'

export class ValidationModel {
  validate = (
    target: EventTarget,
    component: Input,
    validationMediator: IMediator
  ) => {
    const { name, value } = target as HTMLInputElement

    const isValid = validateInput(value, name)

    validationMediator.notify(component, isValid)
  }
}

export const validationModel = new ValidationModel()
