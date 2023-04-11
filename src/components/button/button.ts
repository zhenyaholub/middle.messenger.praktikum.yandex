import { Block } from "../../utils/Block";

import template from "./button.template.hbs";

export class Button extends Block {
  constructor(props: any) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
