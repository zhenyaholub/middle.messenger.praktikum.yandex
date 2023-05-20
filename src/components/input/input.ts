import { type BlockPropsType } from "../../types/block";
import { type InputPropsType } from "./input.types";

import { Block } from "../../utils/block";
import { store } from "../../store/store";

import template from "./input.template.hbs";
import { validate } from "../../store/actionsCreators";

export class Input extends Block {
  constructor(
    props: InputPropsType & BlockPropsType<Partial<HTMLInputElement>>
  ) {
    super(props);
  }

  validate() {
    store.dispatch(validate(this));
  }

  handleBlur() {
    this.validate();
  }

  handleFocus() {
    this.validate();
  }

  init() {
    this.props.events = {};
    this.props.events.blur = this.handleBlur.bind(this);
    this.props.events.focus = this.handleFocus.bind(this);
  }

  render() {
    return this.compile(template, this.props);
  }
}
