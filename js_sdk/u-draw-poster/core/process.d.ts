import type { Consola } from './consola';
import type { DrawPosterInstance } from './typed';
declare class DrawProcess {
    dp: Partial<DrawPosterInstance>;
    consola: Consola;
    /** 进程堆栈 */
    stacks: Array<() => Promise<any>>;
    /** 是否阻止运行 */
    prevent: boolean;
    constructor(dp: Partial<DrawPosterInstance>, consola: Consola);
    push: (callback: Function) => void;
    stop: () => void;
    walk: () => Promise<any[]>;
}
export default DrawProcess;
