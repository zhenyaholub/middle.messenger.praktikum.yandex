import { SignPropsType } from "../../types/sign";
import { Block } from "../../utils/block";

import template from "./signUp.template.hbs";

export class SignUp extends Block {
  constructor(props: SignPropsType) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
