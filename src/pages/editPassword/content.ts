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
  NEW_PASSWORD_LABEL,
  NEW_PASSWORD_LABEL_AGAIN,
  OLD_PASSWORD_LABEL
} from '../../utils/fieldLabels'
import {
  NEW_PASSWORD,
  NEW_PASSWORD_AGAIN,
  OLD_PASSWORD
} from '../../utils/fieldNames'
import { validationEditPassword } from '../../utils/mediator'

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

const oldPasswordInput = new EditFormInput({
  name: OLD_PASSWORD,
  id: OLD_PASSWORD,
  type: 'password',
  value: '............',
  mediator: validationEditPassword
})
const errorMessageOldPassword = new ErrorMessage({
  message: 'Неверный пароль',
  style: 'right:0'
})
const oldPassword = new EditFormItem({
  key: OLD_PASSWORD_LABEL,
  input: oldPasswordInput,
  errorMessage: errorMessageOldPassword,
  name: OLD_PASSWORD
})
const newPasswordInput = new EditFormInput({
  name: NEW_PASSWORD,
  id: NEW_PASSWORD,
  type: 'password',
  value: '............',
  mediator: validationEditPassword
})
const errorMessageNewPassword = new ErrorMessage({
  message: 'Неверный пароль',
  style: 'right:0'
})
const newPassword = new EditFormItem({
  key: NEW_PASSWORD_LABEL,
  input: newPasswordInput,
  errorMessage: errorMessageNewPassword,
  name: NEW_PASSWORD
})
const newPasswordAgainInput = new EditFormInput({
  name: NEW_PASSWORD_AGAIN,
  id: NEW_PASSWORD_AGAIN,
  type: 'password',
  value: '............',
  mediator: validationEditPassword
})
const errorMessageNewPasswordAgain = new ErrorMessage({
  message: 'Неверный пароль',
  style: 'right:0'
})
const newPasswordAgain = new EditFormItem({
  key: NEW_PASSWORD_LABEL_AGAIN,
  input: newPasswordAgainInput,
  errorMessage: errorMessageNewPasswordAgain,
  name: NEW_PASSWORD_AGAIN
})

const items = [oldPassword, newPassword, newPasswordAgain]

const saveButton = new Button({
  type: 'submit',
  text: 'Сохранить',
  style: 'max-width:280px'
})

const form = new EditForm({ items, button: saveButton })

export const editPasswordProps = { back, avatar, form }

validationEditPassword.add(items)
