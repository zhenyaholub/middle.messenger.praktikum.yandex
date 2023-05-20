import { type BlockPropsType } from '../../types/block'
import { type FormPropsType } from './form.types'

import { Block } from '../../utils/block'

import template from './form.template.hbs'

export class Form extends Block {
  constructor (props: BlockPropsType<FormPropsType>) {
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
