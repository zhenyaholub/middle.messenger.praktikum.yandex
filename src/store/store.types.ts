export type StateType = Record<string, any>
export interface ActionType { type: string, payload?: any }
export type ReducerType = (state: StateType, action: ActionType) => StateType

export enum StoreEvents {
  Updated = 'updated',
}
