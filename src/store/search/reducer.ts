import { type ReducerType } from '../store.types'
import { SET_SEARCH_LABEL_VISIBILITY } from './actions'

export const searchReducer: ReducerType = (state, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_LABEL_VISIBILITY: {
      const { isVisible, value } = payload

      return {
        ...state,
        isLabelVisible:
          !isVisible && !value && typeof value === 'string' ? true : isVisible
      }
    }
    default:
      return state
  }
}
