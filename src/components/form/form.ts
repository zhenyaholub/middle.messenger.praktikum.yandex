import { type BlockPropsType } from '../../types/block'
import { type FormPropsType } from './form.types'

import { Block } from '../../utils/block'
import { store } from '../../store/store'
import { validateAll } from '../../store/validationErrors/actionsCreators'
import { signIn, signUp } from '../../store/user/actionCreators'
import { FormNamesType } from '../../types/formNames'

import template from './form.template.hbs'

export class Form extends Block {
  constructor (props: BlockPropsType<FormPropsType>) {
    super(props)
  }

  async handleSubmit (event: Event) {
    event.preventDefault()
    const { name } = event.target as HTMLInputElement

    store.dispatch(validateAll(this))

    if (name === FormNamesType.SignIn) {
      store.dispatch(signIn(this))
    } else {
      store.dispatch(signUp(this))
    }
  }

  init () {
    this.props.events = {}
    this.props.events.submit = this.handleSubmit.bind(this)
  }

  render () {
    return this.compile(template, this.props)
  }
}
