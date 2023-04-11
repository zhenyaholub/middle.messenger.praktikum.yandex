import { Block } from "../../utils/Block";

import template from "./input.template.hbs";

export class Input extends Block {
  constructor(props: Partial<HTMLInputElement>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
