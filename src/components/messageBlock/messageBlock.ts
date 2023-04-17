import { BlockPropsType } from "../../types/block";
import { MessageBlockPropsType } from "./messageBlock.types";

import { Block } from "../../utils/block";

import template from "./messageBlock.template.hbs";

export class MessageBlock extends Block {
  constructor(props: BlockPropsType<MessageBlockPropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
