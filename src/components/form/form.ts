import { FormPropsType } from "./form.types";

import { Block } from "../../utils/Block";

import template from "./form.template.hbs";
import { Input } from "../input/input";

export class Form extends Block {
  constructor(props: FormPropsType) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
