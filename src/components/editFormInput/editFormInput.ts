import { type BlockPropsType } from '../../types/block'

import { Block } from '../../utils/block'

import template from './editFormInput.template.hbs'

export class EditFormInput extends Block {
  constructor (props: BlockPropsType<Partial<HTMLInputElement>>) {
    super(props)
  }

  handleBlur ({ target }: Event) {}

  handleFocus ({ target }: Event) {}

  init () {
    this.props.events = {}
    this.props.events.blur = this.handleBlur.bind(this)
    this.props.events.focus = this.handleFocus.bind(this)
  }

  render () {
    return this.compile(template, this.props)
  }
}
