import { type NotificationPropsType } from './notification.types'

import { Block } from '../../utils/block'

import template from './notification.template.hbs'

export class Notification extends Block {
  constructor (props: NotificationPropsType) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
