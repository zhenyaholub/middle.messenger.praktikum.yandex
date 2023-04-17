import { BlockPropsType } from "../../types/block";
import { ArrowButtonPropsType } from "./arrowButton.types";

import { Block } from "../../utils/block";

import template from "./arrowButton.template.hbs";

export class ArrowButton extends Block {
  constructor(props: BlockPropsType<ArrowButtonPropsType>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
