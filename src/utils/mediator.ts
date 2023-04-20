import { type RoundedButton } from '../components/roundedButton/roundedButton'
import { type IMediator } from '../types/mediator'
import { type Block } from './block'

import { MESSAGE } from './fieldNames'

export class Mediator implements IMediator {
  components: Block[] = []

  notify (sender: Block, data: unknown) {
    const { name } = sender.getContent() as HTMLInputElement

    if (name === MESSAGE) {
      const submit = this.components[0].getContent()

      if (!data) {
        submit?.classList.add('roundedButton_disabled')
        submit?.setAttribute('disabled', '')
      } else {
        submit?.classList.remove('roundedButton_disabled')
        submit?.removeAttribute('disabled')
      }

      return
    }

    const [component] = this.components.filter(
      (component) => component.getContent()!.getAttribute('data-name') === name
    )

    const errorMessage = component.children.errorMessage as Block
    const errorMessageHtml = errorMessage.getContent()

    if (!data) {
      errorMessageHtml?.classList.add('error_appear')
    } else {
      errorMessageHtml?.classList.remove('error_appear')
    }
  }

  add (component: Block[] | RoundedButton[]) {
    this.components.push(...component)
  }
}

export const validationSignIn: IMediator = new Mediator()
export const validationSignUp: IMediator = new Mediator()
export const validationChats: IMediator = new Mediator()
