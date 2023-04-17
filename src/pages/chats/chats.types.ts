import { ChatItem } from "../../components/chatItem/chatItem";
import { Dialog } from "../../components/dialog/dialog";
import { Empty } from "../../components/empty/empty";
import { ProfileLink } from "../../components/profileLink/profileLink";
import { Search } from "../../components/search/search";

export type ChatsPropsType = {
  profileLink: ProfileLink;
  search: Search;
  chats: ChatItem[];
  right?: Dialog | Empty;
};
