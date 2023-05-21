import { Button } from '../../components/button/button'
import { Field } from '../../components/field/field'
import { Form } from '../../components/form/form'
import { Icons8 } from '../../components/icons8/icons8'
import { Label } from '../../components/label/label'
import { Link } from '../../components/link/link'
import { Title } from '../../components/title/title'
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
import { ErrorMessage } from '../../components/errorMessage/errorMessage'
import { SIGN_IN } from '../../utils/urls'
import { router } from '../../utils/router'
import { connect } from '../../store/connect'
import { type Block } from '../../utils/block'
import { FormNamesType } from '../../types/formNames'
import { PasswordAgainInput } from '../../components/passwordAgainInput/passwordAgainInput'

const withSignUpEmailError = connect((state) => ({
  error: state.validationErrors.signUp.email
}))
const withSignUpLoginError = connect((state) => ({
  error: state.validationErrors.signUp.login
}))
const withSignUpFirstNameError = connect((state) => ({
  error: state.validationErrors.signUp.first_name
}))
const withSignUpSecondNameError = connect((state) => ({
  error: state.validationErrors.signUp.second_name
}))
const withSignUpPhoneError = connect((state) => ({
  error: state.validationErrors.signUp.phone
}))
const withSignUpPasswordError = connect((state) => ({
  error: state.validationErrors.signUp.password
}))
const withSignUpPasswordAgainError = connect((state) => ({
  error: state.validationErrors.signUp.password_again
}))

const title = new Title({ text: 'Регистрация' })

const emailLabel = new Label({ for: EMAIL, text: 'Почта' })
const emailInput = new Input({
  name: EMAIL,
  id: EMAIL,
  type: 'text',
  placeholder: 'vitalik@yandex.ru',
  value: '',
  class: 'input'
})
const ErrorMessageEmailComponent = withSignUpEmailError(
  ErrorMessage as typeof Block
)
const errorMessageEmail = new ErrorMessageEmailComponent({
  message: 'Неверный email'
})
const email = new Field({
  label: emailLabel,
  input: emailInput,
  name: EMAIL,
  errorMessage: errorMessageEmail as ErrorMessage
})

const loginLabel = new Label({ for: LOGIN, text: 'Логин' })
const loginInput = new Input({
  name: LOGIN,
  id: LOGIN,
  type: 'text',
  placeholder: 'Vitalik',
  value: '',
  class: 'input'
})
const ErrorMessageLoginComponent = withSignUpLoginError(
  ErrorMessage as typeof Block
)
const errorMessageLogin = new ErrorMessageLoginComponent({
  message: 'Неверный логин'
})
const login = new Field({
  label: loginLabel,
  input: loginInput,
  name: LOGIN,
  errorMessage: errorMessageLogin as ErrorMessage
})

const firstNameLabel = new Label({ for: FIRST_NAME, text: 'Имя' })
const firstNameInput = new Input({
  name: FIRST_NAME,
  id: FIRST_NAME,
  type: 'text',
  placeholder: 'Виталий',
  value: '',
  class: 'input'
})
const ErrorMessageFirstNameComponent = withSignUpFirstNameError(
  ErrorMessage as typeof Block
)
const errorMessageFirstName = new ErrorMessageFirstNameComponent({
  message: 'Неверное имя'
})
const firstName = new Field({
  label: firstNameLabel,
  input: firstNameInput,
  name: FIRST_NAME,
  errorMessage: errorMessageFirstName as ErrorMessage
})

const secondNameLabel = new Label({ for: SECOND_NAME, text: 'Фамилия' })
const secondNameInput = new Input({
  name: SECOND_NAME,
  id: SECOND_NAME,
  type: 'text',
  placeholder: 'Виноградов',
  value: '',
  class: 'input'
})
const ErrorMessageSecondNameComponent = withSignUpSecondNameError(
  ErrorMessage as typeof Block
)
const errorMessageSecondName = new ErrorMessageSecondNameComponent({
  message: 'Неверная фамилия'
})
const secondName = new Field({
  label: secondNameLabel,
  input: secondNameInput,
  name: SECOND_NAME,
  errorMessage: errorMessageSecondName as ErrorMessage
})

const phoneLabel = new Label({ for: PHONE, text: 'Телефон' })
const phoneInput = new Input({
  name: PHONE,
  id: PHONE,
  type: 'text',
  placeholder: '+7 (909) 967 30 30',
  value: '',
  class: 'input'
})
const ErrorMessagePhoneComponent = withSignUpPhoneError(
  ErrorMessage as typeof Block
)
const errorMessagePhone = new ErrorMessagePhoneComponent({
  message: 'Неверный телефон'
})
const phone = new Field({
  label: phoneLabel,
  input: phoneInput,
  name: PHONE,
  errorMessage: errorMessagePhone as ErrorMessage
})

const passwordLabel = new Label({ for: PASSWORD, text: 'Пароль' })
export const passwordInput = new Input({
  name: PASSWORD,
  id: PASSWORD,
  type: 'password',
  placeholder: '...........',
  class: 'input'
})
const ErrorMessagePasswordComponent = withSignUpPasswordError(
  ErrorMessage as typeof Block
)
const errorMessagePassword = new ErrorMessagePasswordComponent({
  message: 'Неверный пароль'
})
const password = new Field({
  label: passwordLabel,
  input: passwordInput,
  name: PASSWORD,
  errorMessage: errorMessagePassword as ErrorMessage
})

const passwordAgainLabel = new Label({
  for: PASSWORD_AGAIN,
  text: 'Пароль (ещё раз)'
})
const passwordAgainInput = new PasswordAgainInput({
  name: PASSWORD_AGAIN,
  id: PASSWORD_AGAIN,
  type: 'password',
  placeholder: '...........',
  class: 'input'
})
const ErrorMessagePasswordAgainComponent = withSignUpPasswordAgainError(
  ErrorMessage as typeof Block
)
const errorMessagePasswordAgain = new ErrorMessagePasswordAgainComponent({
  message: 'Пароли не совпадают'
})
const passwordAgain = new Field({
  label: passwordAgainLabel,
  input: passwordAgainInput,
  style: 'margin:0 0 47px 0',
  name: PASSWORD_AGAIN,
  errorMessage: errorMessagePasswordAgain as ErrorMessage
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
  events: {
    click: () => {
      router.go(SIGN_IN)
    }
  }
})

const form = new Form({
  title,
  fields,
  topButton,
  bottomButton,
  name: FormNamesType.SignUp
})
const icons8 = new Icons8({})

export const signUpProps = { form, icons8 }
