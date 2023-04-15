type EventsType = { events?: Record<string, () => void> };
type StyleType = { style?: string };
export type BlockPropsType<P> = P & EventsType & StyleType;
