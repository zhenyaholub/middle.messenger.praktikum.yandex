import { Field } from "../../components/field/field";

import { type ReducerType } from "../store.types";

import { REGULAR_EXPRESSIONS } from "../../utils/regularExpressions";
import {
  RESET_ERRORS,
  VALIDATE,
  VALIDATE_ALL,
  VALIDATE_MESSAGE,
} from "./actions";

import { VALIDATION_ERRORS_SLICE } from "../initialSlices";
import { Input } from "../../components/input/input";
import { Form } from "../../components/form/form";
import { getIsValid } from "../../utils/helpers";
import { InputNames } from "../../types/inputNames";

export const validationErrorsReducer: ReducerType = (
  state,
  { type, payload }
) => {
  switch (type) {
    case VALIDATE: {
      const { name, value } = payload.getContent();
      const isValid = getIsValid(name, value);

      return {
        ...state,
        signIn: { ...state.signIn, [name]: !isValid },
        signUp: { ...state.signUp, [name]: !isValid },
      };
    }
    case VALIDATE_ALL: {
      const {
        children: { fields },
      } = payload;

      const form = payload as Form;
      const { name: formName } = form.getContent() as HTMLFormElement;

      let newState = {};

      fields.forEach(({ children }: Field) => {
        const input = children.input as Input;
        const { name, value } = input.getContent() as HTMLInputElement;

        newState = {
          ...newState,
          [name]: !getIsValid(name as InputNames, value),
        };
      });

      return {
        ...state,
        [formName]: { ...state[formName], ...newState },
      };
    }
    case VALIDATE_MESSAGE: {
      const { name, value } = payload.getContent();
      const {
        children: { submit },
      } = payload.getParent();
      const html = submit.getContent();

      const isValid = getIsValid(name, value);

      if (isValid) {
        html.classList.remove("roundedButtonDisabled");
        html.removeAttribute("disabled");
      } else {
        html.classList.add("roundedButtonDisabled");
        html.setAttribute("disabled", "");
      }

      return { ...state };
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
