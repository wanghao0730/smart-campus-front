import type { DrawPosterInstance } from './typed';
export declare class Consola {
    private dp;
    private $color;
    constructor(dp: Partial<DrawPosterInstance>);
    log: (message: string, color?: string, ...args: any[]) => void;
    success: (message: string, ...args: any[]) => void;
    error: (message: string, ...args: any[]) => void;
    loading: (type: 'render' | 'create') => () => any;
}
