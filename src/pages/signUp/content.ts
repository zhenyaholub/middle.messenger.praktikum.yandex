import { Button } from '../../components/button/button'
import { Field } from '../../components/field/field'
import { Form } from '../../components/form/form'
import { Icons8 } from '../../components/icons8/icons8'
import { Label } from '../../components/label/label'
import { Link } from '../../components/link/link'
import { Title } from '../../components/title/title'
import { SignUp } from './signUp'
import { Input } from '../../components/input/input'

import { handleSubmit, validate } from '../signIn/handlers'

import {
  EMAIL,
  LOGIN,
  PASSWORD,
  PASSWORD_AGAIN,
  PHONE,
  SECOND_NAME
  , FIRST_NAME
} from '../../utils/fieldNames'
import { push } from '../../utils/helpers'
import { SIGN_IN } from '../../utils/urls'

const title = new Title({ text: 'Регистрация' })

const emailLabel = new Label({ for: EMAIL, text: 'Почта' })
const emailInput = new Input({
  name: EMAIL,
  id: EMAIL,
  type: 'email',
  placeholder: 'vitalik@yandex.ru',
  value: '',
  class: 'input',
  events: { blur: validate, focus: validate }
})
const email = new Field({ label: emailLabel, input: emailInput })

const loginLabel = new Label({ for: LOGIN, text: 'Логин' })
const loginInput = new Input({
  name: LOGIN,
  id: LOGIN,
  type: 'text',
  placeholder: 'Vitalik',
  value: '',
  class: 'input',
  events: { blur: validate, focus: validate }
})
const login = new Field({ label: loginLabel, input: loginInput })

const firstNameLabel = new Label({ for: FIRST_NAME, text: 'Имя' })
const firstNameInput = new Input({
  name: FIRST_NAME,
  id: FIRST_NAME,
  type: 'text',
  placeholder: 'Виталий',
  value: '',
  class: 'input',
  events: { blur: validate, focus: validate }
})
const firstName = new Field({ label: firstNameLabel, input: firstNameInput })

const secondNameLabel = new Label({ for: SECOND_NAME, text: 'Фамилия' })
const secondNameInput = new Input({
  name: SECOND_NAME,
  id: SECOND_NAME,
  type: 'text',
  placeholder: 'Виноградов',
  value: '',
  class: 'input',
  events: { blur: validate, focus: validate }
})
const secondName = new Field({
  label: secondNameLabel,
  input: secondNameInput
})

const phoneLabel = new Label({ for: PHONE, text: 'Телефон' })
const phoneInput = new Input({
  name: PHONE,
  id: PHONE,
  type: 'text',
  placeholder: '+7 (909) 967 30 30',
  value: '',
  class: 'input',
  events: { blur: validate, focus: validate }
})
const phone = new Field({
  label: phoneLabel,
  input: phoneInput
})

const passwordLabel = new Label({ for: PASSWORD, text: 'Пароль' })
const passwordInput = new Input({
  name: PASSWORD,
  id: PASSWORD,
  type: 'password',
  placeholder: '...........',
  class: 'input',
  events: { blur: validate, focus: validate }
})
const password = new Field({
  label: passwordLabel,
  input: passwordInput
})

const passwordAgainLabel = new Label({
  for: PASSWORD_AGAIN,
  text: 'Пароль (ещё раз)'
})
const passwordAgainInput = new Input({
  name: PASSWORD_AGAIN,
  id: PASSWORD_AGAIN,
  type: 'password',
  placeholder: '...........',
  class: 'input',
  events: { blur: validate, focus: validate }
})
const passwordAgain = new Field({
  label: passwordAgainLabel,
  input: passwordAgainInput,
  style: 'margin:0 0 47px 0'
})

const fields = [
  email,
  login,
  firstName,
  secondName,
  phone,
  password,
  passwordAgain
]
const topButton = new Button({ type: 'submit', text: 'Зарегистрироваться' })
const bottomButton = new Link({
  text: 'Войти',
  events: { click: push.bind(this, SIGN_IN) }
})

const form = new Form({
  title,
  fields,
  topButton,
  bottomButton,
  events: { submit: handleSubmit }
})
const icons8 = new Icons8({})

export const signUp = new SignUp({ form, icons8 })
