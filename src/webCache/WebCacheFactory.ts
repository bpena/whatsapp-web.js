import { RemoteWebCache } from './RemoteWebCache';
import { LocalWebCache } from './LocalWebCache';
import { WebCache } from './WebCache';

export const createWebCache = (type, options) => {
    switch (type) {
        case 'remote':
            return new RemoteWebCache(options);
        case 'local':
            return new LocalWebCache(options);
        case 'none':
            return new WebCache();
        default:
            throw new Error(`Invalid WebCache type ${type}`);
    }
};