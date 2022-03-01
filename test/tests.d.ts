import { Ruler } from '../src';

declare global {
    interface Window {
        sdk: {
            map: mapgl.Map;
            Map: typeof mapgl.Map;
        };
        ready: boolean;
        ruler: Ruler;
        Ruler: typeof Ruler;
    }
}