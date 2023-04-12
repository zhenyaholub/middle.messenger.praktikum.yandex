import { LinkPropsType } from "./link.types";

import { Block } from "../../utils/Block";

import template from "./link.hbs";

export class Link extends Block {
  constructor(props: LinkPropsType) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
