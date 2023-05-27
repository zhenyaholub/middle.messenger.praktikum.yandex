import { type ReducerType } from '../store.types'
import { SHOW_NOTIFICATION } from './actions'

export const notificationReducer: ReducerType = (state, { type, payload }) => {
  switch (type) {
    case SHOW_NOTIFICATION: {
      return {
        ...state
      }
    }
    default:
      return state
  }
}
