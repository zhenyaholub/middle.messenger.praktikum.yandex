import { error404 } from "../pages/404/content";
import { serverError } from "../pages/500/content";
import { signIn } from "../pages/signIn/content";
import { signUp } from "../pages/signUp/content";

import { NOT_FOUND, SERVER_ERROR, SIGN_IN, SIGN_UP } from "./urls";

export const ROUTES = {
  [SIGN_IN]: signIn,
  [SIGN_UP]: signUp,
  [NOT_FOUND]: error404,
  [SERVER_ERROR]: serverError,
};
