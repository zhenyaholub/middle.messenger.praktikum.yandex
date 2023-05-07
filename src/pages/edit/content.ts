import { ArrowButton } from '../../components/arrowButton/arrowButton'
import { RoundedButton } from '../../components/roundedButton/roundedButton'
import { Avatar } from '../../components/avatar/avatar'
import { EditForm } from '../../components/editForm/editForm'
import { Button } from '../../components/button/button'
import { EditFormInput } from '../../components/editFormInput/editFormInput'
import { EditFormItem } from '../../components/editFormItem/editFormItem'
import { ErrorMessage } from '../../components/errorMessage/errorMessage'

import arrow from '../../../static/icons/arrow.svg'
import avatarIcon from '../../../static/icons/avatar.svg'

import {
  DISPLAY_NAME_LABEL,
  EMAIL_LABEL,
  FIRST_NAME_LABEL,
  LOGIN_LABEL,
  PHONE_LABEL,
  SECOND_NAME_LABEL
} from '../../utils/fieldLabels'
import {
  DISPLAY_NAME,
  EMAIL,
  FIRST_NAME,
  LOGIN,
  PHONE,
  SECOND_NAME
} from '../../utils/fieldNames'

import { validationEdit } from '../../utils/mediator'

const button = new RoundedButton({
  type: 'submit',
  arrowClasses: '',
  image: arrow
})
const back = new ArrowButton({
  button
})
const avatar = new Avatar({
  image: avatarIcon,
  edit: true,
  style: 'margin:0 0 97px 0;'
})

const emailInput = new EditFormInput({
  name: EMAIL,
  id: EMAIL,
  type: 'email',
  value: 'pochta@yandex.ru',
  mediator: validationEdit
})
const errorMessageEmail = new ErrorMessage({
  message: 'Неверный email',
  style: 'right:0'
})
const email = new EditFormItem({
  key: EMAIL_LABEL,
  input: emailInput,
  errorMessage: errorMessageEmail,
  name: EMAIL
})
const loginInput = new EditFormInput({
  name: LOGIN,
  id: LOGIN,
  type: 'text',
  value: 'ivanivanov',
  mediator: validationEdit
})
const errorMessageLogin = new ErrorMessage({
  message: 'Неверный логин',
  style: 'right:0'
})
const login = new EditFormItem({
  key: LOGIN_LABEL,
  input: loginInput,
  errorMessage: errorMessageLogin,
  name: LOGIN
})
const firstNameInput = new EditFormInput({
  name: FIRST_NAME,
  id: FIRST_NAME,
  type: 'text',
  value: 'Иван',
  mediator: validationEdit
})
const errorMessageFirstName = new ErrorMessage({
  message: 'Неверное имя',
  style: 'right:0'
})
const firstName = new EditFormItem({
  key: FIRST_NAME_LABEL,
  input: firstNameInput,
  errorMessage: errorMessageFirstName,
  name: FIRST_NAME
})
const secondNameInput = new EditFormInput({
  name: SECOND_NAME,
  id: SECOND_NAME,
  type: 'text',
  value: 'Иванов',
  mediator: validationEdit
})
const errorMessageSecondName = new ErrorMessage({
  message: 'Неверная фамилия',
  style: 'right:0'
})
const secondName = new EditFormItem({
  key: SECOND_NAME_LABEL,
  input: secondNameInput,
  errorMessage: errorMessageSecondName,
  name: SECOND_NAME
})
const displayNameInput = new EditFormInput({
  name: DISPLAY_NAME,
  id: DISPLAY_NAME,
  type: 'text',
  value: 'Иван',
  mediator: validationEdit
})
const errorMessageDisplayName = new ErrorMessage({
  message: 'Неверное имя в чате',
  style: 'right:0'
})
const displayName = new EditFormItem({
  key: DISPLAY_NAME_LABEL,
  input: displayNameInput,
  errorMessage: errorMessageDisplayName,
  name: DISPLAY_NAME
})
const phoneInput = new EditFormInput({
  name: PHONE,
  id: PHONE,
  type: 'text',
  value: '+7 (909) 967 30 30',
  mediator: validationEdit
})
const errorMessagePhone = new ErrorMessage({
  message: 'Неверный телефон',
  style: 'right:0'
})
const phone = new EditFormItem({
  key: PHONE_LABEL,
  input: phoneInput,
  errorMessage: errorMessagePhone,
  name: PHONE
})

const items = [email, login, firstName, secondName, displayName, phone]

const saveButton = new Button({
  type: 'submit',
  text: 'Сохранить',
  style: 'max-width:280px'
})

const form = new EditForm({ items, button: saveButton })

export const editProps = { back, avatar, form }

validationEdit.add(items)
