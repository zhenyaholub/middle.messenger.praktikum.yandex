import { Button } from '../../components/button/button'
import { Field } from '../../components/field/field'
import { Form } from '../../components/form/form'
import { Icons8 } from '../../components/icons8/icons8'
import { Label } from '../../components/label/label'
import { Link } from '../../components/link/link'
import { Title } from '../../components/title/title'
import { SignUp } from './signUp'
import { Input } from '../../components/input/input'

import {
  EMAIL,
  LOGIN,
  PASSWORD,
  PASSWORD_AGAIN,
  PHONE,
  SECOND_NAME,
  FIRST_NAME
} from '../../utils/fieldNames'
import { push } from '../../utils/helpers'
import { SIGN_IN } from '../../utils/urls'
import { validationSignUp } from '../../utils/mediator'
import { ErrorMessage } from '../../components/errorMessage/errorMessage'

const title = new Title({ text: 'Регистрация' })

const emailLabel = new Label({ for: EMAIL, text: 'Почта' })
const emailInput = new Input({
  name: EMAIL,
  id: EMAIL,
  type: 'text',
  placeholder: 'vitalik@yandex.ru',
  value: '',
  class: 'input',
  mediator: validationSignUp
})
const errorMessageEmail = new ErrorMessage({ message: 'Неверный email' })
const email = new Field({
  label: emailLabel,
  input: emailInput,
  name: EMAIL,
  errorMessage: errorMessageEmail
})

const loginLabel = new Label({ for: LOGIN, text: 'Логин' })
const loginInput = new Input({
  name: LOGIN,
  id: LOGIN,
  type: 'text',
  placeholder: 'Vitalik',
  value: '',
  class: 'input',
  mediator: validationSignUp
})
const errorMessageLogin = new ErrorMessage({ message: 'Неверный логин' })
const login = new Field({
  label: loginLabel,
  input: loginInput,
  name: LOGIN,
  errorMessage: errorMessageLogin
})

const firstNameLabel = new Label({ for: FIRST_NAME, text: 'Имя' })
const firstNameInput = new Input({
  name: FIRST_NAME,
  id: FIRST_NAME,
  type: 'text',
  placeholder: 'Виталий',
  value: '',
  class: 'input',
  mediator: validationSignUp
})
const errorMessageFirstName = new ErrorMessage({ message: 'Неверное имя' })
const firstName = new Field({
  label: firstNameLabel,
  input: firstNameInput,
  name: FIRST_NAME,
  errorMessage: errorMessageFirstName
})

const secondNameLabel = new Label({ for: SECOND_NAME, text: 'Фамилия' })
const secondNameInput = new Input({
  name: SECOND_NAME,
  id: SECOND_NAME,
  type: 'text',
  placeholder: 'Виноградов',
  value: '',
  class: 'input',
  mediator: validationSignUp
})
const errorMessageSecondName = new ErrorMessage({
  message: 'Неверная фамилия'
})
const secondName = new Field({
  label: secondNameLabel,
  input: secondNameInput,
  name: SECOND_NAME,
  errorMessage: errorMessageSecondName
})

const phoneLabel = new Label({ for: PHONE, text: 'Телефон' })
const phoneInput = new Input({
  name: PHONE,
  id: PHONE,
  type: 'text',
  placeholder: '+7 (909) 967 30 30',
  value: '',
  class: 'input',
  mediator: validationSignUp
})
const errorMessagePhone = new ErrorMessage({
  message: 'Неверный телефон'
})
const phone = new Field({
  label: phoneLabel,
  input: phoneInput,
  name: PHONE,
  errorMessage: errorMessagePhone
})

const passwordLabel = new Label({ for: PASSWORD, text: 'Пароль' })
const passwordInput = new Input({
  name: PASSWORD,
  id: PASSWORD,
  type: 'password',
  placeholder: '...........',
  class: 'input',
  mediator: validationSignUp
})
const errorMessagePassword = new ErrorMessage({
  message: 'Неверный пароль'
})
const password = new Field({
  label: passwordLabel,
  input: passwordInput,
  name: PASSWORD,
  errorMessage: errorMessagePassword
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
  mediator: validationSignUp
})
const errorMessagePasswordAgain = new ErrorMessage({
  message: 'Неверный пароль'
})
const passwordAgain = new Field({
  label: passwordAgainLabel,
  input: passwordAgainInput,
  style: 'margin:0 0 47px 0',
  name: PASSWORD_AGAIN,
  errorMessage: errorMessagePasswordAgain
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
  mediator: validationSignUp
})
const icons8 = new Icons8({})

export const signUp = new SignUp({ form, icons8 })

validationSignUp.add(fields)
