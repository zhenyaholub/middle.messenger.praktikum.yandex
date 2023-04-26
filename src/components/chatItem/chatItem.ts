import { type BlockPropsType } from '../../types/block'

import { Block } from '../../utils/block'
import { type ChatItemPropsType } from './chatItem.types'

import template from './chatItem.template.hbs'

export class ChatItem extends Block {
  constructor (props: BlockPropsType<ChatItemPropsType>) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
