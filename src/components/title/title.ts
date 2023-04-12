import { TitlePropsType } from "./title.types";

import { Block } from "../../utils/Block";

import template from "./title.template.hbs";

export class Title extends Block {
  constructor(props: TitlePropsType) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
