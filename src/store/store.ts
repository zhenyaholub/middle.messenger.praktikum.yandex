import { StateType, StoreEvents } from "./store.types";

import { set } from "../utils/helpers";
import { EventBus } from "../utils/eventBus";

class Store extends EventBus {
  static __instance: Store;
  private state: StateType = {};

  constructor() {
    super();

    if (Store.__instance) {
      return Store.__instance;
    }

    Store.__instance = this;
  }

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

export const store = new Store();
