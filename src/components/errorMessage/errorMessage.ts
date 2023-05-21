import { type ErrorMessagePropsType } from "./errorMessage.types";

import { Block } from "../../utils/block";

import template from "./errorMessage.template.hbs";

export class ErrorMessage extends Block {
  constructor(props: ErrorMessagePropsType) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
