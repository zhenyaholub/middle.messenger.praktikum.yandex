import { Block } from "../utils/block";
import { store } from "./store";
import { StateType, StoreEvents } from "./store.types";
import { Props } from "../types/block";

export function connect(mapStateToProps: (state: StateType) => StateType) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(props: Props) {
        super({ ...props, ...mapStateToProps(store.getState()) });

        store.on(StoreEvents.Updated, () =>
          this.setProps({ ...mapStateToProps(store.getState()) })
        );
      }
    };
  };
}