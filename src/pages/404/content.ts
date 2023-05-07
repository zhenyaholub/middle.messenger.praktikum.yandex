import { Error } from '../../components/error/error'
import { Link } from '../../components/link/link'

export const error404 = new Error({
  code: '404',
  message: 'Не туда попали',
  link: new Link({
    text: 'Назад к чатам'
  })
})
