import { type ProfileItemPropsType } from './profileItem.types'

import { Block } from '../../utils/block'

import template from './profileItem.template.hbs'

export class ProfileItem extends Block {
  constructor (props: ProfileItemPropsType) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
