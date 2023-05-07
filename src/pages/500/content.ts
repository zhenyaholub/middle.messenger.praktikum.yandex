import { Error } from '../../components/error/error'
import { Link } from '../../components/link/link'

export const serverError = new Error({
  code: '500',
  message: 'Мы уже фиксим',
  link: new Link({
    text: 'Назад к чатам'
  })
})
