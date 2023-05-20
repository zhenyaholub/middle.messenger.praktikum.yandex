import { type ReducerType } from './store.types'

export const combineReducers = (
  reducers: Record<string, ReducerType>
): ReducerType => {
  const reducerKeys = Object.keys(reducers)
  return function combination (state = {}, action) {
    const nextState: Record<string, any> = {}

    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]

      const reducer = reducers[key]

      const previousStateForKey = state[key]

      const nextStateForKey = reducer(previousStateForKey, action)

      nextState[key] = nextStateForKey
    }
    return nextState
  }
}
