import { SET_SEARCH_LABEL_VISIBILITY } from './actions'

export const setSearchLabelVisibility = (
  isVisible: boolean,
  value?: string
) => ({
  type: SET_SEARCH_LABEL_VISIBILITY,
  payload: { isVisible, value }
})
