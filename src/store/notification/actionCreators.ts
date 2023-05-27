import { SHOW_NOTIFICATION } from './actions'

export const showNotification = (type: string) => ({
  type: SHOW_NOTIFICATION,
  payload: type
})
