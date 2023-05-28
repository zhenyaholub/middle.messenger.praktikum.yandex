import { Block } from '../../utils/block'
import { type ChatsPropsType } from './messenger.types'
import { store } from '../../store/store'
import { getUserData } from '../../store/user/actionCreators'

import template from './messenger.template.hbs'

export class Chats extends Block {
  constructor (props: ChatsPropsType) {
    super(props)
  }

  protected init () {
    store.dispatch(getUserData())
  }

  render () {
    return this.compile(template, this.props)
  }
}
