import { Close } from '../close/close'
import { Notification } from './notification'

import closeIcon from '../../../static/icons/close.png'
import errorIcon from '../../../static/icons/error.png'

export const close = new Close({ image: closeIcon })
export const notification = new Notification({
  image: errorIcon,
  message: 'Отправлены неверные данные',
  close
})
