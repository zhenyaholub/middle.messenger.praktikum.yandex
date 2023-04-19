import { Block } from '../../utils/block'

import template from './smallAvatar.template.hbs'

export class SmallAvatar extends Block {
  constructor (props: unknown) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
