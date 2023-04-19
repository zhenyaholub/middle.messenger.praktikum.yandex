import { type EditFormItemPropsType } from './editFormItem.types'

import { Block } from '../../utils/block'

import template from './editFormItem.template.hbs'

export class EditFormItem extends Block {
  constructor (props: EditFormItemPropsType) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
