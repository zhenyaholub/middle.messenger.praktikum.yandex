import { setSearchLabelVisibility } from '../../store/search/actionCreators'
import { store } from '../../store/store'
import { type BlockPropsType } from '../../types/block'

import { Input } from '../input/input'
import { type InputPropsType } from '../input/input.types'

export class SearchInput extends Input {
  constructor (
    props: InputPropsType & BlockPropsType<Partial<HTMLInputElement>>
  ) {
    super(props)
  }

  handleBlur () {
    const { value } = this.getContent() as HTMLInputElement

    store.dispatch(setSearchLabelVisibility(false, value))
  }

  handleFocus () {
    store.dispatch(setSearchLabelVisibility(false))
  }

  init () {
    this.props.events = {}
    this.props.events.blur = this.handleBlur.bind(this)
    this.props.events.focus = this.handleFocus.bind(this)
  }
}
