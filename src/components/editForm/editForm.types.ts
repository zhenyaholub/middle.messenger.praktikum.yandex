import { Button } from "../button/button";
import { EditFormInput } from "../editFormInput/editFormInput";

export type EditFormPropsType = {
  forPassword?: boolean;
  items: EditFormInput[];
  button: Button;
};
