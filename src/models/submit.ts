import { type IMediator } from '../types/mediator'

import { type Input } from '../components/input/input'
import { type Form } from '../components/form/form'
import { type Field } from '../components/field/field'
import { type MessageActionsArea } from '../components/messageActionsArea/messageActionsArea'

import { validateInput } from '../utils/helpers'

export class SubmitModel {
  submit = (
    target: EventTarget,
    component: Form | MessageActionsArea,
    validationMediator: IMediator
  ) => {
    const data: Record<string, FormDataEntryValue> = {}

    const formDataEntries = new FormData(target as HTMLFormElement).entries()

    for (const entry of formDataEntries) {
      const [key, value] = entry

      data[key] = value
    }

    console.log(data)

    Object.entries(data).forEach(([name, value]) => {
      const isValid = validateInput(value as string, name)

      if (!isValid) {
        const fields = component.children.fields as Field[]

        const [field] = fields.filter(
          (field) => field.getContent()!.getAttribute('data-name') === name
        )

        const input = field.children.input as Input

        validationMediator.notify(input, isValid)
      }
    })
  }
}

export const submitModel = new SubmitModel()
