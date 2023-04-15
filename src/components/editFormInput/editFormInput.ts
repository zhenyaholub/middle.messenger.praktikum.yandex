import { BlockPropsType } from "../../types/block";

import { Block } from "../../utils/block";

import template from "./editFormInput.template.hbs";

export class EditFormInput extends Block {
  constructor(props: BlockPropsType<Partial<HTMLInputElement>>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
