import { type ReducerType } from "../store.types";

import { REGULAR_EXPRESSIONS } from "../../utils/regularExpressions";
import { RESET_ERRORS, VALIDATION } from "../actions";

import { VALIDATION_ERRORS_SLICE } from "../initialSlices";

export const validationErrorsReducer: ReducerType = (
  state,
  { type, payload }
) => {
  switch (type) {
    case VALIDATION: {
      const { name, value } = payload.getContent();
      const isValid =
        REGULAR_EXPRESSIONS[name as keyof typeof REGULAR_EXPRESSIONS].test(
          value
        );

      return {
        ...state,
        signIn: { ...state.signIn, [name]: !isValid },
        signUp: { ...state.signUp, [name]: !isValid },
      };
    }
    case RESET_ERRORS: {
      return {
        ...state,
        ...VALIDATION_ERRORS_SLICE.validationErrors,
      };
    }
    default:
      return state;
  }
};
