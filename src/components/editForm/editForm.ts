import { BlockPropsType } from "../../types/block";
import { EditFormPropsType } from "./editForm.types";

import { Block } from "../../utils/block";

import template from "./editForm.template.hbs";

export class EditForm extends Block {
  constructor(props: BlockPropsType<EditFormPropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
