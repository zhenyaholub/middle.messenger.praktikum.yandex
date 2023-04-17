import { BlockPropsType } from "../../types/block";
import { MessageActionsAreaPropsType } from "./messageActionsArea.types";

import { Block } from "../../utils/block";

import template from "./messageActionsArea.template.hbs";

export class MessageActionsArea extends Block {
  constructor(props: BlockPropsType<MessageActionsAreaPropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
