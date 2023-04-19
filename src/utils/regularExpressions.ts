import {
  EMAIL,
  FIRST_NAME,
  LOGIN,
  MESSAGE,
  PASSWORD,
  PASSWORD_AGAIN,
  PHONE,
  SECOND_NAME
} from './fieldNames'

export const REGULAR_EXPRESSIONS = {
  [LOGIN]: /(?!^\d+$)^[a-zA-Z0-9_-]{3,20}$/,
  [PASSWORD]: /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,40}$/,
  [PASSWORD_AGAIN]: /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,40}$/,
  [MESSAGE]: /.+/,
  [PHONE]: /^(\+)?\d{10,15}$/g,
  [EMAIL]:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(\.)[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  [FIRST_NAME]: /^[A-ZА-Я]+[A-ZА-Я-]*$/i,
  [SECOND_NAME]: /^[A-ZА-Я]+[A-ZА-Я-]*$/i
}
