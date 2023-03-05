import type { Plugin } from '../core';
/**
 * 处理 drawPoster 参数
 * @param args
 * @returns options
 */
export declare const helper: (...args: any[]) => {
    selector: string;
    componentThis?: any;
    type?: "2d" | "context" | "webgl";
    loading?: boolean | {
        render?: string;
        create?: string;
    };
    debug?: boolean;
    gcanvas?: boolean;
    width?: number;
    height?: number;
    plugins?: Plugin[];
    immediate?: boolean;
};
/**
 * 对插件参数进行处理并引入
 * @param plugins 插件列表
 * @param args 参数
 */
export declare const helperPluginParams: (plugins: Plugin[], ...args: any[]) => Plugin;
