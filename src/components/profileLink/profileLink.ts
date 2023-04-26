import { type ProfileLinkPropsType } from './profileLink.types'
import { type BlockPropsType } from '../../types/block'

import { Block } from '../../utils/block'

import template from './profileLink.template.hbs'

export class ProfileLink extends Block {
  constructor (props: BlockPropsType<ProfileLinkPropsType>) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
