import { BlockPropsType } from "../../types/block";
import { DialogPropsType } from "./dialog.types";

import { Block } from "../../utils/block";

import template from "./dialog.template.hbs";

export class Dialog extends Block {
  constructor(props: BlockPropsType<DialogPropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
