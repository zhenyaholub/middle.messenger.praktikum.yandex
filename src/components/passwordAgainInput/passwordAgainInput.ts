import { validatePasswordAgain } from '../../store/validationErrors/actionsCreators'
import { store } from '../../store/store'
import { type BlockPropsType } from '../../types/block'

import { Input } from '../input/input'
import { type InputPropsType } from '../input/input.types'

export class PasswordAgainInput extends Input {
  constructor (
    props: InputPropsType & BlockPropsType<Partial<HTMLInputElement>>
  ) {
    super(props)
  }

  validate () {
    store.dispatch(validatePasswordAgain(this))
  }

  handleInput () {
    this.validate()
  }

  init () {
    this.props.events = {}
    this.props.events.input = this.handleInput.bind(this)
  }
}
