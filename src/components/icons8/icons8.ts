import { Block } from "../../utils/block";

import template from "./icons8.template.hbs";

export class Icons8 extends Block {
  constructor(props: {}) {
    super(props);
  }
  render() {
    return this.compile(template, this.props);
  }
}
