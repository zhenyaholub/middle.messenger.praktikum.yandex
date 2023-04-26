import { type Companion } from '../companion/companion'
import { type MessageActionsArea } from '../messageActionsArea/messageActionsArea'
import { type MessageBlock } from '../messageBlock/messageBlock'

export interface DialogPropsType {
  companion: Companion
  items: MessageBlock[]
  actions: MessageActionsArea
}
