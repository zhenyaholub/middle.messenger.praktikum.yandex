import { BlockPropsType } from "../../types/block";
import { AvatarPropsType } from "./avatar.types";

import { Block } from "../../utils/block";

import template from "./avatar.template.hbs";

export class Avatar extends Block {
  constructor(props: BlockPropsType<AvatarPropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
