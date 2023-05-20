import { Block } from '../../utils/block'

import template from './preloader.template.hbs'

export class Preloader extends Block {
  constructor (props: unknown) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
