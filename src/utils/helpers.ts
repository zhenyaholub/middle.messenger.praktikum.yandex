import { REGULAR_EXPRESSIONS } from './regularExpressions'
import { ROUTES } from './routes'
import {
  SERVER_ERROR,
  EDIT_PROFILE,
  EDIT_PASSWORD,
  PROFILE,
  NOT_FOUND,
  SIGN_UP,
  SIGN_IN
} from './urls'

export function renderPage () {
  const root = document.querySelector('#app')

  root!.innerHTML = ''

  const page = ROUTES[location.pathname as keyof typeof ROUTES]

  root!.appendChild(page.getContent()!)

  page.dispatchComponentDidMount()

  return root
}

export function push (url: string) {
  history.pushState({}, '', url)

  window.dispatchEvent(new Event('popstate'))
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
    case PROFILE:
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

export const validate = (value: string, name: string) => {
  return REGULAR_EXPRESSIONS[name as keyof typeof REGULAR_EXPRESSIONS].test(
    value
  )
}
