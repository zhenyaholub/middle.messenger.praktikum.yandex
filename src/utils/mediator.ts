import { type Field } from '../components/field/field'
import { login, password } from '../pages/signIn/content'
import { type IMediator } from '../types/mediator'
import { type Block } from './block'

export class Mediator implements IMediator {
  fields: Field[]

  constructor (fields: Field[]) {
    this.fields = fields
  }

  notify (sender: Block) {
    const { name } = sender.getContent() as HTMLInputElement
    console.log(name)
  }
}

export const validationMediator: IMediator = new Mediator([login, password])
