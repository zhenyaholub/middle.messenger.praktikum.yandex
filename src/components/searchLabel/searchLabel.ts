import { type BlockPropsType } from '../../types/block'
import { Block } from '../../utils/block'
import { type SearchLabelPropsType } from './searchLabel.types'

import template from './searchLabel.template.hbs'

export class SearchLabel extends Block {
  constructor (props: BlockPropsType<SearchLabelPropsType>) {
    super(props)
  }

  render () {
    return this.compile(template, this.props)
  }
}
