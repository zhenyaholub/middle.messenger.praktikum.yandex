import { Block } from "../../utils/block";
import { ProfilePropsType } from "./profile.types";

import template from "./profile.template.hbs";

export class Profile extends Block {
  constructor(props: ProfilePropsType) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
