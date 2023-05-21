import { type Edit } from "../components/edit/edit";
import { type Chats } from "../pages/messenger/messenger";
import { type Profile } from "../pages/profile/profile";
import { type SignIn } from "../pages/signIn/signIn";
import { type SignUp } from "../pages/signUp/signUp";

export type RoutesType =
  | "/"
  | "/sign-up"
  | "/messenger"
  | "/settings"
  | "/edit"
  | "/edit-profile"
  | "/edit-password";
export type BlockClassType =
  | typeof SignIn
  | typeof SignUp
  | typeof Chats
  | typeof Edit
  | typeof Profile;
