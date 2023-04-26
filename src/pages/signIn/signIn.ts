import { type SignPropsType } from '../../types/sign'
import { Block } from '../../utils/block'

import template from './signIn.template.hbs'

export class SignIn extends Block {
  constructor (props: SignPropsType) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
