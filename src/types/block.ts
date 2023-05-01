export type Props = Record<string, any>
export type Listeners = Record<string, () => void>
export interface EventsType {
  events?: Listeners
}
interface StyleType {
  style?: string
}
export type BlockPropsType<P> = P & EventsType & StyleType
