type Events = { events?: Record<string, () => void> };
export type BlockPropsType<P> = P & Events;
