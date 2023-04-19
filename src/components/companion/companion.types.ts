import { type Actions } from '../actions/actions'
import { type SmallAvatar } from '../smallAvatar/smallAvatar'

export interface CompanionPropsType {
  avatar: SmallAvatar
  name: string
  actions: Actions
}
