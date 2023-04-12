import { Button } from "../button/button";
import { Field } from "../field/field";
import { Link } from "../link/link";
import { Title } from "../title/title";

export type FormPropsType = {
  title: Title;
  fields: Array<Field>;
  topButton: Button;
  bottomButton: Link;
};
