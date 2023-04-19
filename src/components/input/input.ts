import { type BlockPropsType } from '../../types/block'
import { Block } from '../../utils/block'
import { type InputPropsType } from './input.types'

import template from './input.template.hbs'
import { type IMediator } from '../../types/mediator'
import { validate } from '../../utils/helpers'

export class Input extends Block {
  mediator: IMediator

  constructor (
    props: InputPropsType & BlockPropsType<Partial<HTMLInputElement>>
  ) {
    super(props)
    this.mediator = this.props.mediator
  }

  handleBlur ({ target }: Event) {
    const { name, value } = target as HTMLInputElement
    const isValid = validate(value, name)
    if (!isValid) {
      this.mediator.notify(this)
    }
  }

  handleFocus ({ target }: Event) {
    const { name, value } = target as HTMLInputElement
    const isValid = validate(value, name)
    if (!isValid) {
      this.mediator.notify(this)
    }
  }

  init () {
    this.props.events = {}
    this.props.events.blur = this.handleBlur.bind(this)
    this.props.events.focus = this.handleFocus.bind(this)
  }

  render () {
    return this.compile(template, this.props)
  }
}
