import { type FieldPropsType } from './field.types'

import { Block } from '../../utils/block'

import template from './field.template.hbs'

export class Field extends Block {
  constructor (props: FieldPropsType) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
