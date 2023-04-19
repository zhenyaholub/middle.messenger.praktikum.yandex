import { Block } from '../../utils/block'
import { type ChatsPropsType } from './chats.types'

import template from './chats.template.hbs'

export class Chats extends Block {
  constructor (props: ChatsPropsType) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
