import { BlockPropsType } from "../../types/block";
import { ButtonPropsType } from "./button.types";

import { Block } from "../../utils/block";

import template from "./button.template.hbs";

export class Button extends Block {
  constructor(props: BlockPropsType<ButtonPropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
