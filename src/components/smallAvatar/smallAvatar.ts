import { Block } from "../../utils/block";
import { SmallAvatarPropsType } from "./smallAvatar.types";

import template from "./smallAvatar.template.hbs";

export class SmallAvatar extends Block {
  constructor(props: SmallAvatarPropsType) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
