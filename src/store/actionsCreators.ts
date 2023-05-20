import { Input } from "../components/input/input";

import { RESET_ERRORS, VALIDATION } from "./actions";

export const validate = (payload: Input) => ({ type: VALIDATION, payload });

export const resetErrors = () => ({ type: RESET_ERRORS });
