import { type RoundedButton } from '../components/roundedButton/roundedButton'
import { type MediatorType, type IMediator } from '../types/mediator'
import { type Block } from './block'

export class Mediator implements IMediator {
  components: Block[] = []
  type: MediatorType

  constructor (type: MediatorType) {
    this.type = type
  }

  notify (sender: Block, data: unknown) {
    if (this.type === 'chats') {
      const submit = this.components[0].getContent()
      if (!data) {
        submit?.classList.add('roundedButton_disabled')
        submit?.setAttribute('disabled', '')
      } else {
        submit?.classList.remove('roundedButton_disabled')
        submit?.removeAttribute('disabled')
      }
    } else {
      const { name } = sender.getContent() as HTMLInputElement

      const [component] = this.components.filter(
        (component) =>
          component.getContent()!.getAttribute('data-name') === name
      )

      const errorMessage = component.children.errorMessage as Block
      const errorMessageHtml = errorMessage.getContent()

      if (!data) {
        errorMessageHtml?.classList.add('error_appear')
      } else {
        errorMessageHtml?.classList.remove('error_appear')
      }
    }
  }

  add (component: Block[] | RoundedButton[]) {
    this.components.push(...component)
  }
}

export const validationSignIn: IMediator = new Mediator('signIn')
export const validationSignUp: IMediator = new Mediator('signUp')
export const validationChats: IMediator = new Mediator('chats')
export const validationEdit: IMediator = new Mediator('edit')
export const validationEditPassword: IMediator = new Mediator('editPassword')
