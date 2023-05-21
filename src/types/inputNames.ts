import {
  AVATAR,
  DISPLAY_NAME,
  EMAIL,
  FIRST_NAME,
  LOGIN,
  MESSAGE,
  NEW_PASSWORD,
  NEW_PASSWORD_AGAIN,
  OLD_PASSWORD,
  PASSWORD,
  PASSWORD_AGAIN,
  PHONE,
  SEARCH,
  SECOND_NAME,
} from "../utils/fieldNames";

export type InputNames =
  | typeof LOGIN
  | typeof PASSWORD
  | typeof PASSWORD_AGAIN
  | typeof FIRST_NAME
  | typeof SECOND_NAME
  | typeof EMAIL
  | typeof PHONE
  | typeof MESSAGE
  | typeof DISPLAY_NAME
  | typeof AVATAR
  | typeof OLD_PASSWORD
  | typeof NEW_PASSWORD
  | typeof NEW_PASSWORD_AGAIN
  | typeof SEARCH;
