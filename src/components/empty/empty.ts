import { Block } from '../../utils/block'

import template from './empty.template.hbs'

export class Empty extends Block {
  constructor (props: unknown) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
