import { type Field } from '../components/field/field'
import { type IMediator } from '../types/mediator'
import { type Block } from './block'

export class Mediator implements IMediator {
  fields: Field[] = []

  notify (sender: Block, data: unknown) {
    const { name } = sender.getContent() as HTMLInputElement

    const [field] = this.fields.filter(
      (field) => field.getContent()!.getAttribute('data-name') === name
    )

    const errorMessage = field.children.errorMessage as Block
    const errorMessageHtml = errorMessage.getContent()

    if (!data) {
      errorMessageHtml?.classList.add('error_appear')
    } else {
      errorMessageHtml?.classList.remove('error_appear')
    }
  }

  add (component: Field[]) {
    this.fields.push(...component)
  }
}

export const validationSignIn: IMediator = new Mediator()
export const validationSignUp: IMediator = new Mediator()
export const validationChats: IMediator = new Mediator()
