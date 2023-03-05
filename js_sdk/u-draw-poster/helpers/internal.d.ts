import type { Plugin, Plugins } from '../core/plugin';
import type { DrawPosterInstance } from '../core/typed';
export declare const globalPlugins: Plugin[];
export declare const getCurrentDrawPoster: (selector: string) => DrawPosterInstance;
export declare const setCurrentDrawPoster: (dp: Partial<DrawPosterInstance>, ps: Plugins) => void;
export declare const onReady: (callback?: Function) => Promise<void>;
