import { type BlockPropsType } from '../../types/block'
import { type IMediator } from '../../types/mediator'
import { type InputPropsType } from './input.types'

import { Block } from '../../utils/block'

import { validationModel } from '../../models/validation'

import template from './input.template.hbs'

export class Input extends Block {
  mediator: IMediator

  constructor (
    props: InputPropsType & BlockPropsType<Partial<HTMLInputElement>>
  ) {
    super(props)
    this.mediator = this.props.mediator
  }

  handleBlur ({ target }: Event) {
    validationModel.validate(target!, this, this.mediator)
  }

  handleFocus ({ target }: Event) {
    validationModel.validate(target!, this, this.mediator)
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
