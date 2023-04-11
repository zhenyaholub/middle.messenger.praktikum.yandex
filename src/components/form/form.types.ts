import { Field } from "../field/field";
import { Title } from "../title/title";

export type FormPropsType = {
  title: Title;
  fields?: Array<Field>;
};
