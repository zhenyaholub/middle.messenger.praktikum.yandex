import { BlockPropsType } from "../../types/block";
import { Block } from "../../utils/block";
import { InputPropsType } from "./input.types";

import template from "./input.template.hbs";

export class Input extends Block {
  constructor(
    props: InputPropsType & BlockPropsType<Partial<HTMLInputElement>>
  ) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
