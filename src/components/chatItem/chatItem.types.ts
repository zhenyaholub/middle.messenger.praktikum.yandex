import { type SmallAvatar } from '../smallAvatar/smallAvatar'

export interface ChatItemPropsType {
  avatar: SmallAvatar
  name: string
  lastMessage?: string
  lastMessageTime?: string
  unreadMessagesCount?: number
}
