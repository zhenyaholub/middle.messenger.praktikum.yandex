import { Block } from "../../utils/block";
import { SearchPropsType } from "./search.types";

import template from "./search.template.hbs";

export class Search extends Block {
  constructor(props: SearchPropsType) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
