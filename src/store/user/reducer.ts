import { type ReducerType } from '../store.types'

import { SET_USER_DATA } from './actions'

export const userReducer: ReducerType = (state, { type, payload }) => {
  switch (type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...payload
      }
    }
    default:
      return state
  }
}
