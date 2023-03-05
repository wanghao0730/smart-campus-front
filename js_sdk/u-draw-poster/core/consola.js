"use strict";
import "../chunk-4TPCCB4K.js";
class Consola {
  constructor(dp) {
    this.dp = dp;
    this.$color = "#3489fd";
    this.log = (message, color = this.$color, ...args) => {
      var _a, _b;
      if (!((_b = (_a = this.dp) == null ? void 0 : _a.$options) == null ? void 0 : _b.debug))
        return;
      console.log(`%c${this.dp.id} -> ${message}`, `color: ${color}`, ...args);
    };
    this.success = (message, ...args) => {
      this.log(`\u{1F389} ${message}`, "#19be6b", ...args);
    };
    this.error = (message, ...args) => {
      this.log(`\u{1F389} ${message}`, "#fa3534", ...args);
    };
    this.loading = (type) => {
      var _a, _b, _c, _d;
      if ((_b = (_a = this.dp) == null ? void 0 : _a.$options) == null ? void 0 : _b.loading)
        uni.showLoading({ title: ((_d = (_c = this.dp) == null ? void 0 : _c.$options) == null ? void 0 : _d.loading)[type] });
      return () => uni.hideLoading();
    };
  }
}
export {
  Consola
};
