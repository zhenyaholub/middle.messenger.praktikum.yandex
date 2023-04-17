import { BlockPropsType } from "../../types/block";
import { ChatMessagePropsType } from "./chatMessage.types";

import { Block } from "../../utils/block";

import template from "./chatMessage.template.hbs";

export class ChatMessage extends Block {
  constructor(props: BlockPropsType<ChatMessagePropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
