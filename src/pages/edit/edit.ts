import { EditPropsType } from "./edit.types";

import { Block } from "../../utils/block";

import template from "./edit.template.hbs";

export class Edit extends Block {
  constructor(props: EditPropsType) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
