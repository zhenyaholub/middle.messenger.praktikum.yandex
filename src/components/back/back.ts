import { BlockPropsType } from "../../types/block";
import { BackPropsType } from "./back.types";

import { Block } from "../../utils/block";

import template from "./back.template.hbs";

export class Back extends Block {
  constructor(props: BlockPropsType<BackPropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
