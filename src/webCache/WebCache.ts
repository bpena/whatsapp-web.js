/**
 * Default implementation of a web version cache that does nothing.
 */
export class WebCache {
    async resolve(version: string): Promise<any> { return null; }
    async persist(...arg: any[]): Promise<void> { }
}

export class VersionResolveError extends Error { }