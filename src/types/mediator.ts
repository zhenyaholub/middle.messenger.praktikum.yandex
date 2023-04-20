import { type RoundedButton } from '../components/roundedButton/roundedButton'
import { type Block } from '../utils/block'

export interface IMediator {
  components: Block[]
  notify: (sender: Block, data: unknown) => void
  add: (component: Block[] | RoundedButton[]) => void
}
