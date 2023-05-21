import { type ChatItem } from "../../components/chatItem/chatItem";
import { type Dialog } from "../../components/dialog/dialog";
import { type Empty } from "../../components/empty/empty";
import { type ProfileLink } from "../../components/profileLink/profileLink";
import { type Search } from "../../components/search/search";

export interface ChatsPropsType {
  profileLink: ProfileLink;
  search: Search;
  chats: ChatItem[];
  right?: Dialog | Empty;
}
