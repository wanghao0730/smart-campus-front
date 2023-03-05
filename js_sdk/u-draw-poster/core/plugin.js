"use strict";
import "../chunk-4TPCCB4K.js";
import { globalPlugins } from "../helpers/internal";
import { helperPluginParams } from "../helpers/params";
const _Plugins = class {
  constructor(dp) {
    this.dp = dp;
    this.$plugins = [];
    this.use = (...args) => {
      var _a;
      const plugin = helperPluginParams(this.$plugins, ...args);
      if (this.dp.canvas)
        (_a = plugin == null ? void 0 : plugin.mounted) == null ? void 0 : _a.call(plugin, this.dp);
      return this;
    };
    this.run = (lifeCycleName) => {
      this.plugins.forEach((lifeCycle) => {
        var _a;
        return (_a = lifeCycle[lifeCycleName]) == null ? void 0 : _a.call(lifeCycle, this.dp);
      });
    };
    var _a, _b;
    if ((_a = dp.$options) == null ? void 0 : _a.plugins)
      this.$plugins.push(...(_b = dp.$options) == null ? void 0 : _b.plugins);
  }
  get plugins() {
    return [...globalPlugins, ...this.$plugins];
  }
};
let Plugins = _Plugins;
Plugins.use = (...args) => {
  helperPluginParams(globalPlugins, ...args);
  return _Plugins;
};
export {
  Plugins
};
