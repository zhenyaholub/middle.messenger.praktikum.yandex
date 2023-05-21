export type StateType = Record<string, any>
export type DispatchType = (action: ActionType) => void
export type GetStateType = () => StateType
export type AsyncActionType = (
  dispatch: DispatchType,
  getState: GetStateType
) => void
export interface ActionType { type: string, payload?: any }
export type ReducerType = (state: StateType, action: ActionType) => StateType

export enum StoreEvents {
  Updated = 'updated',
}
