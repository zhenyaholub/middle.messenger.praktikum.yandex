import { type BlockPropsType } from '../../types/block'
import { type MessageActionsAreaPropsType } from './messageActionsArea.types'
import { type IMediator } from '../../types/mediator'

import { Block } from '../../utils/block'
import { submitModel } from '../../models/submit'

import template from './messageActionsArea.template.hbs'

export class MessageActionsArea extends Block {
  mediator: IMediator

  constructor (props: BlockPropsType<MessageActionsAreaPropsType>) {
    super(props)
    this.mediator = this.props.mediator
  }

  handleSubmit (event: Event) {
    event.preventDefault()

    const { target } = event

    submitModel.submit(target!, this, this.mediator)
  }

  init () {
    this.props.events = {}
    this.props.events.submit = this.handleSubmit.bind(this)
  }

  render () {
    return this.compile(template, this.props)
  }
}
