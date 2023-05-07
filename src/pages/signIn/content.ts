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
import { validationSignIn } from '../../utils/mediator'
import { SIGN_UP } from '../../utils/urls'
import { router } from '../../utils/router'

const title = new Title({ text: 'Вход' })

const loginLabel = new Label({ for: LOGIN, text: 'Логин' })
const loginInput = new Input({
  name: LOGIN,
  id: LOGIN,
  type: 'text',
  placeholder: 'Vitalik',
  value: '',
  class: 'input',
  mediator: validationSignIn
})
const errorMessageLogin = new ErrorMessage({ message: 'Неверный логин' })
export const login = new Field({
  label: loginLabel,
  input: loginInput,
  name: LOGIN,
  errorMessage: errorMessageLogin
})

const passwordLabel = new Label({ for: PASSWORD, text: 'Пароль' })
const passwordInput = new Input({
  name: PASSWORD,
  id: PASSWORD,
  type: 'password',
  placeholder: '...........',
  class: 'input',
  mediator: validationSignIn
})
const errorMessagePassword = new ErrorMessage({ message: 'Неверный пароль' })
export const password = new Field({
  label: passwordLabel,
  input: passwordInput,
  style: 'margin:0 0 159px 0',
  name: PASSWORD,
  errorMessage: errorMessagePassword
})

const fields = [login, password]
const topButton = new Button({ type: 'submit', text: 'Авторизоваться' })
const bottomButton = new Link({
  text: 'Нет аккаунта?',
  events: { click: () => { router.go(SIGN_UP) } }
})

const form = new Form({
  title,
  fields,
  topButton,
  bottomButton,
  mediator: validationSignIn
})

const icons8 = new Icons8({})

export const signInProps = { form, icons8 }

validationSignIn.add(fields)
