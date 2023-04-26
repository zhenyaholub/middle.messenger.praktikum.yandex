import { type RoundedButton } from '../components/roundedButton/roundedButton'
import { type Block } from '../utils/block'

export interface IMediator {
  components: Block[]
  type: MediatorType
  notify: (sender: Block, data: unknown) => void
  add: (component: Block[] | RoundedButton[]) => void
}

export type MediatorType =
  | 'signIn'
  | 'signUp'
  | 'chats'
  | 'edit'
  | 'editPassword'
