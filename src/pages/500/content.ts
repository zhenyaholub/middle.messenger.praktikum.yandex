import { Error } from '../../components/error/error'
import { Link } from '../../components/link/link'

import { push } from '../../utils/helpers'
import { CHATS } from '../../utils/urls'

export const serverError = new Error({
  code: '500',
  message: 'Мы уже фиксим',
  link: new Link({
    text: 'Назад к чатам',
    events: { click: push.bind(this, CHATS) }
  })
})
