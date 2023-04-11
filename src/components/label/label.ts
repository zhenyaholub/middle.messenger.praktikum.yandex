import { LabelPropsType } from "./label.types";

import { Block } from "../../utils/Block";

import template from "./label.template.hbs";

export class Label extends Block {
  constructor(props: LabelPropsType) {
    super(props);
  }
  render() {
    return this.compile(template, this.props);
  }
}
