import { Block } from "../../utils/block";
import { type ChatsPropsType } from "./messenger.types";

import template from "./messenger.template.hbs";

export class Chats extends Block {
  constructor(props: ChatsPropsType) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
