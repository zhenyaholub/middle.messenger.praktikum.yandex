export type Listeners = Record<string, (args: any) => void>
export interface EventsType { events?: Listeners }
interface StyleType { style?: string }
export type BlockPropsType<P> = P & EventsType & StyleType
