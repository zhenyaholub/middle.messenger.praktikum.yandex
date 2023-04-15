import { error404 } from "../pages/404/content";
import { serverError } from "../pages/500/content";
import { edit } from "../pages/edit/content";
import { profile } from "../pages/profile/content";
import { signIn } from "../pages/signIn/content";
import { signUp } from "../pages/signUp/content";

import {
  EDIT_PROFILE,
  NOT_FOUND,
  PROFILE,
  SERVER_ERROR,
  SIGN_IN,
  SIGN_UP,
} from "./urls";

export const ROUTES = {
  [SIGN_IN]: signIn,
  [SIGN_UP]: signUp,
  [NOT_FOUND]: error404,
  [SERVER_ERROR]: serverError,
  [PROFILE]: profile,
  [EDIT_PROFILE]: edit,
};
