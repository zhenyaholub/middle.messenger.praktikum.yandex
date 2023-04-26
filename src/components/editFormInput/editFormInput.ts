import { validationModel } from '../../models/validation'
import { type BlockPropsType } from '../../types/block'
import { type IMediator } from '../../types/mediator'
import { type EditFormInputPropsType } from './editFormInput.types'

import { Block } from '../../utils/block'

import template from './editFormInput.template.hbs'

export class EditFormInput extends Block {
  mediator: IMediator

  constructor (
    props: EditFormInputPropsType & BlockPropsType<Partial<HTMLInputElement>>
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
