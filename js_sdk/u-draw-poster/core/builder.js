"use strict";
import {
  __async
} from "../chunk-4TPCCB4K.js";
import { getCurrentDrawPoster, setCurrentDrawPoster } from "../helpers/internal";
import { promisify, queryFields } from "../utils";
import { Consola } from "./consola";
import { Plugins } from "./plugin";
import DrawProcess from "./process";
const builder = (options, wait) => {
  const currentDrawPoster = getCurrentDrawPoster(options.selector);
  if (currentDrawPoster)
    return currentDrawPoster;
  const dp = { $options: options };
  const ps = new Plugins(dp);
  const consola = new Consola(dp);
  const pcs = new DrawProcess(dp, consola);
  Object.defineProperty(dp, "id", { get: () => options.selector });
  Object.defineProperty(dp, "plugins", { get: () => ps.plugins });
  Object.defineProperty(dp, "mount", { get: () => mount });
  const build = () => __async(void 0, null, function* () {
    var _a, _b, _c;
    const { $drawPrototype, $options } = dp;
    const { selector = "", componentThis } = $options || {};
    if ($drawPrototype)
      return yield $drawPrototype;
    const nodeInfo = yield queryFields(selector, componentThis, { node: true });
    const canvas = (nodeInfo == null ? void 0 : nodeInfo.node) || {};
    const ctx = ((_a = canvas.getContext) == null ? void 0 : _a.call(canvas, "2d")) || uni.createCanvasContext(selector, componentThis);
    if (!canvas || !ctx || !selector)
      throw new Error("DrawPoster Error: useDrawPoster to build drawPoster instance");
    canvas.width = (_b = $options == null ? void 0 : $options.width) != null ? _b : 0;
    canvas.height = (_c = $options == null ? void 0 : $options.height) != null ? _c : 0;
    return { canvas, ctx };
  });
  let locked = false;
  const mount = () => __async(void 0, null, function* () {
    if (locked)
      return ready();
    locked = true;
    ps.run("beforeMount");
    Object.defineProperty(dp, "render", { get: () => render });
    Object.defineProperty(dp, "create", { get: () => create });
    Object.defineProperty(dp, "ready", { get: () => ready });
    Object.defineProperty(dp, "draw", { get: () => pcs.push });
    Object.defineProperty(dp, "stop", { get: () => pcs.stop });
    Object.defineProperty(dp, "use", { get: () => ps.use });
    yield wait == null ? void 0 : wait();
    const { canvas, ctx } = yield build();
    Object.defineProperty(dp, "canvas", { get: () => canvas });
    Object.defineProperty(dp, "ctx", { get: () => ctx });
    ps.run("mounted");
    resolved();
    consola.success("\u6302\u8F7D\u6210\u529F!", dp);
    return dp;
  });
  const ready = () => __async(void 0, null, function* () {
    return promised.then(() => dp);
  });
  const render = () => __async(void 0, null, function* () {
    yield ready();
    const hideLoading = consola.loading("create");
    const tips = yield pcs.walk();
    consola.log("\u7ED8\u5236\u72B6\u51B5: ", void 0, tips);
    if (options.type === "context")
      yield new Promise((resolve) => dp.ctx.draw(true, resolve));
    hideLoading();
    return tips;
  });
  const create = (..._0) => __async(void 0, [..._0], function* (_options_ = {}) {
    yield ready();
    ps.run("beforeCreate");
    consola.log("beforeCreate");
    if (pcs.stacks.length > 0)
      yield dp.render();
    if (pcs.prevent)
      return Promise.reject();
    const hideLoading = consola.loading("create");
    const toPathOptions = _options_;
    if (options.type === "2d")
      toPathOptions.canvas = dp.canvas;
    if (options.type === "context")
      toPathOptions.canvasId = dp.id;
    try {
      const { tempFilePath } = yield promisify(uni.canvasToTempFilePath)(toPathOptions);
      consola.success("\u7ED8\u5236\u6210\u529F", { tempFilePath });
      return tempFilePath;
    } catch (error) {
      consola.error("\u7ED8\u5236\u5931\u8D25", error);
    } finally {
      hideLoading();
    }
  });
  let resolved;
  let promised = new Promise((resolve) => resolved = resolve);
  setCurrentDrawPoster(dp, ps);
  return dp;
};
export {
  builder
};
