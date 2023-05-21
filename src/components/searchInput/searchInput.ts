import { store } from "../../store/store";
import { type BlockPropsType } from "../../types/block";

import { Input } from "../input/input";
import { InputPropsType } from "../input/input.types";

export class SearchInput extends Input {
  constructor(
    props: InputPropsType & BlockPropsType<Partial<HTMLInputElement>>
  ) {
    super(props);
  }

  validate() {}

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
}
