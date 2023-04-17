export type Listeners = Record<string, (args: any) => void>;
export type EventsType = { events?: Listeners };
type StyleType = { style?: string };
export type BlockPropsType<P> = P & EventsType & StyleType;
