import { signIn } from "../pages/signIn/content";
import { signUp } from "../pages/signUp/content";

import { SIGN_IN, SIGN_UP } from "./urls";

export const ROUTES = {
  [SIGN_IN]: signIn,
  [SIGN_UP]: signUp,
};
