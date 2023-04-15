import { ProfileGeneralPropsType } from "../../types/profile";

import { Action } from "../../components/action/action";
import { Avatar } from "../../components/avatar/avatar";
import { Back } from "../../components/back/back";
import { ProfileItem } from "../../components/profileItem/profileItem";

export type ProfilePropsType = {
  back: Back;
  avatar: Avatar;
  name: string;
  items: ProfileItem[];
  actions: Action[];
} & ProfileGeneralPropsType;
