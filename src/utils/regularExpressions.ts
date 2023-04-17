import { LOGIN } from "./fieldNames";

export const REGULAR_EXPRESSIONS = {
  [LOGIN]: /(?!^\d+$)^[a-zA-Z0-9_-]{3,20}$/,
};
