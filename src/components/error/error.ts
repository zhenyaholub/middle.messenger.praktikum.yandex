import { ErrorPropsType } from "./error.types";

import { Block } from "@utils/block";

import template from "./error.template.hbs";

export class Error extends Block {
  constructor(props: ErrorPropsType) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
