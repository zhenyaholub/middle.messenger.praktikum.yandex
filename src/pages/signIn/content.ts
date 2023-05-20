import { Button } from '../../components/button/button'
import { Field } from '../../components/field/field'
import { Form } from '../../components/form/form'
import { Icons8 } from '../../components/icons8/icons8'
import { Label } from '../../components/label/label'
import { Link } from '../../components/link/link'
import { Title } from '../../components/title/title'
import { Input } from '../../components/input/input'
import { ErrorMessage } from '../../components/errorMessage/errorMessage'

import { LOGIN, PASSWORD } from '../../utils/fieldNames'
import { SIGN_UP } from '../../utils/urls'
import { router } from '../../utils/router'
import { connect } from '../../store/connect'
import { type Block } from '../../utils/block'

const withSignInLoginError = connect((state) => ({
  error: state.validationErrors.signIn.login
}))
const withSignInPasswordError = connect((state) => ({
  error: state.validationErrors.signIn.password
}))

const title = new Title({ text: 'Вход' })

const loginLabel = new Label({ for: LOGIN, text: 'Логин' })
const loginInput = new Input({
  name: LOGIN,
  id: LOGIN,
  type: 'text',
  placeholder: 'Vitalik',
  value: '',
  class: 'input'
})

const ErrorMessageLoginComponent = withSignInLoginError(
  ErrorMessage as typeof Block
)
const errorMessageLogin = new ErrorMessageLoginComponent({
  message: 'Неверный логин'
})

export const login = new Field({
  label: loginLabel,
  input: loginInput,
  name: LOGIN,
  errorMessage: errorMessageLogin as ErrorMessage
})

const passwordLabel = new Label({ for: PASSWORD, text: 'Пароль' })
const passwordInput = new Input({
  name: PASSWORD,
  id: PASSWORD,
  type: 'password',
  placeholder: '...........',
  class: 'input'
})
const ErrorMessagePasswordComponent = withSignInPasswordError(
  ErrorMessage as typeof Block
)
const errorMessagePassword = new ErrorMessagePasswordComponent({
  message: 'Неверный пароль'
})
export const password = new Field({
  label: passwordLabel,
  input: passwordInput,
  style: 'margin:0 0 159px 0',
  name: PASSWORD,
  errorMessage: errorMessagePassword as ErrorMessage
})

const fields = [login, password]
const topButton = new Button({ type: 'submit', text: 'Авторизоваться' })
const bottomButton = new Link({
  text: 'Нет аккаунта?',
  events: {
    click: () => {
      router.go(SIGN_UP)
    }
  }
})

const form = new Form({
  title,
  fields,
  topButton,
  bottomButton,
  name: 'signIn'
})

const icons8 = new Icons8({})

export const signInProps = { form, icons8 }
