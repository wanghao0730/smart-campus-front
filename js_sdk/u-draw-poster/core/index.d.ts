import type { Plugin } from './plugin';
import { Plugins } from './plugin';
import type { Canvas, CanvasCtx, CreatePathOptions, DrawPosterInstance, DrawPosterOptions } from './typed';
/**
 * 创建 dp 绘制（仅支持 vue3 setup 中使用）
 * @param selector
 * @param options
 */
declare function useDrawPoster(selector: string, options?: Partial<Omit<DrawPosterOptions, 'selector'>>): DrawPosterInstance;
declare function useDrawPoster(options: DrawPosterOptions): DrawPosterInstance;
declare function createDrawPoster(selector: string, options?: Partial<Omit<DrawPosterOptions, 'selector'>>): DrawPosterInstance;
declare function createDrawPoster(options: DrawPosterOptions): DrawPosterInstance;
export { useDrawPoster, createDrawPoster, Plugins };
export type { Plugin, DrawPosterOptions, DrawPosterInstance, Canvas, CreatePathOptions, CanvasCtx };
