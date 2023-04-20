import { type BlockPropsType } from '../../types/block'
import { type FormPropsType } from './form.types'
import { type IMediator } from '../../types/mediator'

import { submitModel } from '../../models/submit'

import { Block } from '../../utils/block'

import template from './form.template.hbs'

export class Form extends Block {
  mediator: IMediator

  constructor (props: BlockPropsType<FormPropsType>) {
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
