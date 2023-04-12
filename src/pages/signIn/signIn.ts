import { SignPropsType } from "../../types/sign";
import { Block } from "../../utils/Block";

import template from "./signIn.template.hbs";

export class SignIn extends Block {
  constructor(props: SignPropsType) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
