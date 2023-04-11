import { FieldPropsType } from "./field.types";

import { Block } from "../../utils/Block";

import template from "./field.template.hbs";

export class Field extends Block {
  constructor(props: FieldPropsType) {
    super(props);
  }
  render() {
    return this.compile(template, this.props);
  }
}
