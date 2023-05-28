import { MessengerComponent, chatsProps } from '../pages/messenger/content'
import { EditComponent, editProps } from '../pages/edit/content'
import { editPasswordProps } from '../pages/editPassword/content'
import { SettingsComponent, profileProps } from '../pages/profile/content'
import { signInProps } from '../pages/signIn/content'
import { SignIn } from '../pages/signIn/signIn'
import { signUpProps } from '../pages/signUp/content'
import { SignUp } from '../pages/signUp/signUp'
import { type StateType } from '../store/store.types'
import { type InputNames } from '../types/inputNames'
import { type Block } from './block'
import { REGULAR_EXPRESSIONS } from './regularExpressions'
import { router } from './router'
import {
  SERVER_ERROR,
  EDIT_PROFILE,
  EDIT_PASSWORD,
  SETTINGS,
  NOT_FOUND,
  SIGN_UP,
  SIGN_IN,
  MESSENGER
} from './urls'
import { type Form } from '../components/form/form'
import { type FormDataType } from '../types/formData'
import { type Props } from '../types/block'
import { type BlockClassType } from '../types/router'
import { store } from '../store/store'
import { getUserData } from '../store/user/actionCreators'

export function render (query: string, block: Block) {
  const element = document.querySelector(query)
  const blockTemplate = block.getContent()
  element?.append(blockTemplate!)
}

export function setBodyStyles () {
  const body = document.body
  body.className = ''

  switch (location.pathname) {
    case SIGN_IN:
      body.classList.add('flexCenter', 'padding')
      break
    case SIGN_UP:
      body.classList.add('flexCenter', 'padding')
      break
    case NOT_FOUND:
      body.classList.add('flexCenter', 'padding')
      break
    case SERVER_ERROR:
      body.classList.add('flexCenter', 'padding')
      break
    case SETTINGS:
      body.classList.add('profileBody', 'padding2')
      break
    case EDIT_PROFILE:
      body.classList.add('profileBody', 'padding2')
      break
    case EDIT_PASSWORD:
      body.classList.add('profileBody', 'padding2')
      break
    default:
      break
  }
}

export function queryStringify (data: object) {
  let query = '?'
  const entries = Object.entries(data)
  entries.forEach(([key, value], index, array) => {
    const isLast = index === array.length - 1
    query += `${key}=${value}${!isLast ? '&' : ''}`
  })
  return query
}

export function validateInput (value: string, name: string) {
  return REGULAR_EXPRESSIONS[name as keyof typeof REGULAR_EXPRESSIONS].test(
    value
  )
}

export function isEqual (lhs: string, rhs: string) {
  return lhs === rhs
}

export function set (state: StateType, path: string, value: unknown) {
  let payload: Record<string, unknown> = {}
  let previousKey = ''

  const keys = path.split('.').reverse()

  keys.forEach((key, index) => {
    const isFirst = index === 0
    previousKey = key

    if (isFirst) {
      payload[key] = value
    } else {
      payload = { [previousKey]: payload }
    }
  })

  Object.assign(state, payload)
}

export function initRoutes () {
  router
    .use(SIGN_IN, SignIn, signInProps)
    .use(SIGN_UP, SignUp, signUpProps)
    .use(SETTINGS, SettingsComponent as unknown as BlockClassType, profileProps)
    .use(
      EDIT_PASSWORD,
      EditComponent as unknown as BlockClassType,
      editPasswordProps
    )
    .use(EDIT_PROFILE, EditComponent as unknown as BlockClassType, editProps)
    .use(MESSENGER, MessengerComponent as unknown as BlockClassType, chatsProps)
    .start()
}

export function getIsValid (name: InputNames, value: string) {
  return REGULAR_EXPRESSIONS[name as keyof typeof REGULAR_EXPRESSIONS].test(
    value
  )
}

export function getFormData (form: Form): FormDataType {
  const formData: FormDataType = {}
  const formHtml = form.getContent() as HTMLFormElement
  const formDataEntries = new FormData(formHtml).entries()

  for (const [key, value] of formDataEntries) {
    formData[key] = value
  }

  return formData
}

export function getIsFormValid (formData: FormDataType): boolean {
  const isValid = Object.entries(formData).every(([name, value]) =>
    REGULAR_EXPRESSIONS[name as keyof typeof REGULAR_EXPRESSIONS].test(
      value as string
    )
  )
  return isValid
}

export function isSuccessStatusCode (statusCode: number): boolean {
  return String(statusCode).startsWith('2')
}

export function connectToUserData (Component: typeof Block) {
  return class extends Component {
    constructor (props: Props) {
      super({ ...props })
    }

    init () {
      store.dispatch(getUserData())
    }
  }
}
