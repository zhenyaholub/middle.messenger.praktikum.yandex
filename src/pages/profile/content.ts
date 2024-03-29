import { ArrowButton } from '../../components/arrowButton/arrowButton'
import { RoundedButton } from '../../components/roundedButton/roundedButton'
import { Profile } from './profile'
import { ProfileItem } from '../../components/profileItem/profileItem'
import { Action } from '../../components/action/action'
import { ActionText } from '../../components/actionText/actionText'
import { Avatar } from '../../components/avatar/avatar'

import {
  DISPLAY_NAME_LABEL,
  EMAIL_LABEL,
  FIRST_NAME_LABEL,
  LOGIN_LABEL,
  PHONE_LABEL,
  SECOND_NAME_LABEL
} from '../../utils/fieldLabels'
import { push } from '../../utils/helpers'
import { CHATS, EDIT_PASSWORD, EDIT_PROFILE, SIGN_IN } from '../../utils/urls'

import arrow from '../../../static/icons/arrow.svg'
import avatarIcon from '../../../static/icons/avatar.svg'

const button = new RoundedButton({
  type: 'button',
  arrowClasses: '',
  image: arrow
})
const back = new ArrowButton({
  button,
  events: { click: push.bind(this, CHATS) }
})
const avatar = new Avatar({
  image: avatarIcon,
  edit: true,
  style: 'margin:0 0 30px 0'
})

const email = new ProfileItem({ key: EMAIL_LABEL, value: 'pochta@yandex.ru' })
const login = new ProfileItem({ key: LOGIN_LABEL, value: 'pivanivanov' })
const name = new ProfileItem({ key: FIRST_NAME_LABEL, value: 'Иван' })
const secondName = new ProfileItem({ key: SECOND_NAME_LABEL, value: 'Иванов' })
const displayName = new ProfileItem({
  key: DISPLAY_NAME_LABEL,
  value: 'Иван'
})
const phone = new ProfileItem({
  key: PHONE_LABEL,
  value: '+7 (909) 967 30 30',
  style: 'border-bottom:none'
})

const items = [email, login, name, secondName, displayName, phone]

const editText = new ActionText({
  text: 'Изменить данные',
  style: 'color:#3369F3',
  events: {
    click: push.bind(this, EDIT_PROFILE)
  }
})
const edit = new Action({ actionText: editText })
const editPasswordText = new ActionText({
  text: 'Изменить пароль',
  style: 'color:#3369F3',
  events: {
    click: push.bind(this, EDIT_PASSWORD)
  }
})
const editPassword = new Action({ actionText: editPasswordText })
const exitText = new ActionText({
  text: 'Выйти',
  style: 'color:#FF0000',
  events: {
    click: push.bind(this, SIGN_IN)
  }
})
const exit = new Action({ actionText: exitText, style: 'border-bottom:none' })

const actions = [edit, editPassword, exit]

export const profile = new Profile({
  back,
  avatar,
  name: 'Виталий',
  items,
  actions
})
