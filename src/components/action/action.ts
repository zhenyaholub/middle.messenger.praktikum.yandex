import { BlockPropsType } from "../../types/block";
import { ActionPropsType } from "./action.types";

import { Block } from "../../utils/block";

import template from "./action.template.hbs";

export class Action extends Block {
  constructor(props: BlockPropsType<ActionPropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
