import { BlockPropsType } from "../../types/block";
import { ActionTextPropsType } from "./actionText.types";

import { Block } from "../../utils/block";

import template from "./actionText.template.hbs";

export class ActionText extends Block {
  constructor(props: BlockPropsType<ActionTextPropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
