import { type BlockPropsType } from '../../types/block'
import { type MessageActionsAreaPropsType } from './messageActionsArea.types'

import { Block } from '../../utils/block'

import template from './messageActionsArea.template.hbs'

export class MessageActionsArea extends Block {
  constructor (props: BlockPropsType<MessageActionsAreaPropsType>) {
    super(props)
  }

  handleSubmit (event: Event) {
    event.preventDefault()
  }

  init () {
    this.props.events = {}
    this.props.events.submit = this.handleSubmit.bind(this)
  }

  render () {
    return this.compile(template, this.props)
  }
}
