import {
  type AVATAR,
  type DISPLAY_NAME,
  type EMAIL,
  type FIRST_NAME,
  type LOGIN,
  type MESSAGE,
  type NEW_PASSWORD,
  type NEW_PASSWORD_AGAIN,
  type OLD_PASSWORD,
  type PASSWORD,
  type PASSWORD_AGAIN,
  type PHONE,
  type SEARCH,
  type SECOND_NAME
} from '../utils/fieldNames'

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
  | typeof SEARCH
