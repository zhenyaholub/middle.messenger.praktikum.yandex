import { type ReducerType } from '../store.types'

import { SIGN_UP } from './actions'

export const userReducer: ReducerType = (state, { type, payload }) => {
  switch (type) {
    case SIGN_UP: {
      return {
        ...state
      }
    }
    default:
      return state
  }
}
