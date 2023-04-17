import { Actions } from "../actions/actions";
import { SmallAvatar } from "../smallAvatar/smallAvatar";

export type CompanionPropsType = {
  avatar: SmallAvatar;
  name: string;
  actions: Actions;
};
