import { type ReducerType } from '../store.types'

import { SIGN_IN, SIGN_UP } from './actions'

export const userReducer: ReducerType = (state, { type, payload }) => {
  switch (type) {
    case SIGN_UP: {
      return {
        ...state
      }
    }
    case SIGN_IN: {
      return {
        ...state
      }
    }
    default:
      return state
  }
}
