import {
  type ActionType,
  type ReducerType,
  type StateType,
  StoreEvents,
  type AsyncActionType
} from './store.types'

import { EventBus } from '../utils/eventBus'
import { validationErrorsReducer } from './validationErrors/reducer'
import { combineReducers } from './combineReducers'
import {
  NOTIFICATION_SLICE,
  SEARCH_SLICE,
  USER_SLICE,
  VALIDATION_ERRORS_SLICE
} from './initialSlices'
import { userReducer } from './user/reducer'
import { notificationReducer } from './notification/reducer'
import { searchReducer } from './search/reducer'

class Store extends EventBus {
  private static __instance: Store
  private readonly reducer: ReducerType
  private readonly logger: boolean | undefined = false
  private state: StateType = {
    ...VALIDATION_ERRORS_SLICE,
    ...NOTIFICATION_SLICE,
    ...SEARCH_SLICE,
    ...USER_SLICE
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

  public dispatch (action: ActionType | AsyncActionType) {
    if (typeof action === 'function') {
      action(this.dispatch.bind(this), this.getState.bind(this))
      return
    }

    const previousState = this.state

    this.state = this.reducer(this.state, action)

    if (this.logger) {
      this.log(action, previousState, this.state)
    }

    this.emit(StoreEvents.Updated)
  }
}

export const store = new Store(
  combineReducers({
    validationErrors: validationErrorsReducer,
    user: userReducer,
    notification: notificationReducer,
    search: searchReducer
  }),
  true
)
