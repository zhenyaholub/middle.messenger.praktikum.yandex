import { ProfileGeneralPropsType } from "../../types/profile";

import { Action } from "../../components/action/action";
import { Avatar } from "../../components/avatar/avatar";
import { ArrowButton } from "../../components/arrowButton/arrowButton";
import { ProfileItem } from "../../components/profileItem/profileItem";

export type ProfilePropsType = {
  back: ArrowButton;
  avatar: Avatar;
  name: string;
  items: ProfileItem[];
  actions: Action[];
} & ProfileGeneralPropsType;
