import { SmallAvatar } from "../smallAvatar/smallAvatar";

export type ChatItemPropsType = {
  avatar: SmallAvatar;
  name: string;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadMessagesCount?: number;
};
