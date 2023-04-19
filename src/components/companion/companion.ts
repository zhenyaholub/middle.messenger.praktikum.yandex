import { type BlockPropsType } from '../../types/block'
import { type CompanionPropsType } from './companion.types'

import { Block } from '../../utils/block'

import template from './companion.template.hbs'

export class Companion extends Block {
  constructor (props: BlockPropsType<CompanionPropsType>) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
