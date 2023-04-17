import { BlockPropsType } from "../../types/block";

import { Block } from "../../utils/block";
import { ChatItemPropsType } from "./chatItem.types";

import template from "./chatItem.template.hbs";

export class ChatItem extends Block {
  constructor(props: BlockPropsType<ChatItemPropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
