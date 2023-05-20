import {
  EMAIL,
  FIRST_NAME,
  LOGIN,
  PASSWORD,
  PASSWORD_AGAIN,
  PHONE,
  SECOND_NAME,
} from "../utils/fieldNames";

export const VALIDATION_ERRORS_SLICE = {
  validationErrors: {
    signIn: {
      [LOGIN]: false,
      [PASSWORD]: false,
    },
    signUp: {
      [EMAIL]: false,
      [LOGIN]: false,
      [FIRST_NAME]: false,
      [SECOND_NAME]: false,
      [PHONE]: false,
      [PASSWORD]: false,
      [PASSWORD_AGAIN]: false,
    },
  },
};
