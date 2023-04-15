import { BlockPropsType } from "../../types/block";
import { RoundedButtonPropsType } from "./roundedButton.types";

import { Block } from "../../utils/block";

import template from "./roundedButton.template.hbs";

export class RoundedButton extends Block {
  constructor(props: BlockPropsType<RoundedButtonPropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
