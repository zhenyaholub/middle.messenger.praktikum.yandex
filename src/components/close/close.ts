import { Block } from '../../utils/block'
import { type ClosePropsType } from './close.types'
import { type BlockPropsType } from '../../types/block'

import template from './close.template.hbs'

export class Close extends Block {
  constructor (props: BlockPropsType<ClosePropsType>) {
    super(props)
  }

  handleClick () {
    console.log(this.getParent())
  }

  init () {
    this.props.events = {}
    this.props.events.click = this.handleClick.bind(this)
  }

  render () {
    return this.compile(template, this.props)
  }
}
