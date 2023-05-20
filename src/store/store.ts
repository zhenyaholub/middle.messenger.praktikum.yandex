import {
  type ActionType,
  type ReducerType,
  type StateType,
  StoreEvents
} from './store.types'

import { EventBus } from '../utils/eventBus'
import { validationErrorsReducer } from './validationErrors/reducer'
import { combineReducers } from './combineReducers'
import { VALIDATION_ERRORS_SLICE } from './initialSlices'

class Store extends EventBus {
  private static __instance: Store
  private readonly reducer: ReducerType
  private readonly logger: boolean | undefined = false
  private state: StateType = {
    ...VALIDATION_ERRORS_SLICE
  }

  constructor (reducer: ReducerType, logger?: boolean) {
    super()

    this.reducer = reducer
    this.logger = logger

    if (Store.__instance) {
      return Store.__instance
    }

    Store.__instance = this
  }

  private log (
    action: ActionType,
    previousState: StateType,
    currentState: StateType
  ) {
    console.info('Action:', action)
    console.info('PreviousState:', previousState)
    console.info('CurrentState:', currentState)
  }

  public getState () {
    return this.state
  }

  public dispatch (action: ActionType) {
    const previousState = this.state

    this.state = this.reducer(this.state, action)

    if (this.logger) {
      this.log(action, previousState, this.state)
    }

    this.emit(StoreEvents.Updated)
  }
}

export const store = new Store(
  combineReducers({ validationErrors: validationErrorsReducer }),
  true
)
