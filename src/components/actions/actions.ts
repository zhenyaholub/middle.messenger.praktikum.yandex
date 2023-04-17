import { Block } from "../../utils/block";
import { EventsType } from "../../types/block";

import template from "./actions.template.hbs";

export class Actions extends Block {
  constructor(props: EventsType) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
