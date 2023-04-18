import { BlockPropsType } from "../../types/block";
import { LinkPropsType } from "./link.types";

import { Block } from "@utils/block";

import template from "./link.hbs";

export class Link extends Block {
  constructor(props: BlockPropsType<LinkPropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
