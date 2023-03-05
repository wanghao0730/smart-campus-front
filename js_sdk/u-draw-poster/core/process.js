"use strict";
import {
  __async
} from "../chunk-4TPCCB4K.js";
class DrawProcess {
  constructor(dp, consola) {
    this.dp = dp;
    this.consola = consola;
    this.stacks = [];
    this.prevent = false;
    this.push = (callback) => {
      const length = this.stacks.length;
      this.stacks.push(() => __async(this, null, function* () {
        var _a, _b;
        try {
          this.dp.ctx.save();
          yield callback(this.dp.ctx, this.dp.canvas);
          this.dp.ctx.restore();
          return true;
        } catch (error) {
          if (!((_b = (_a = error == null ? void 0 : error.message) == null ? void 0 : _a.includes) == null ? void 0 : _b.call(_a, "'nodeId' of undefined")))
            this.consola.error(`\u7ED8\u753B\u6808(${length})\uFF0C\u7ED8\u5236\u9519\u8BEF\uFF1A`, error);
          return false;
        }
      }));
    };
    this.stop = () => {
      this.prevent = true;
    };
    this.walk = () => __async(this, null, function* () {
      const results = [];
      for (const next of this.stacks) {
        if (this.prevent)
          return results;
        results.push(yield next());
      }
      this.stacks = [];
      return results;
    });
  }
}
var process_default = DrawProcess;
export {
  process_default as default
};
