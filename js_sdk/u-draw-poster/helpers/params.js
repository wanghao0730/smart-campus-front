"use strict";
import {
  __spreadValues
} from "../chunk-4TPCCB4K.js";
import { isFunction, isObject, isString } from "../utils/is";
import { UNI_PLATFORM } from "../utils";
import { globalPlugins } from "./internal";
const helper = (...args) => {
  var _a, _b, _c, _d;
  const _default = {
    selector: "",
    componentThis: void 0,
    type: UNI_PLATFORM === "mp-weixin" ? "2d" : "context",
    loading: false,
    debug: false,
    gcanvas: false
  };
  let _overrides;
  if (isObject(args[0])) {
    _overrides = args[0];
  } else if (isObject(args[1])) {
    _overrides = args[1];
    _overrides.selector = args[0];
  } else {
    _overrides = { selector: args[0] };
  }
  const options = __spreadValues(__spreadValues({}, _default), _overrides);
  options.selector = options.selector.replace("#", "");
  if (options.type === "2d")
    options.selector = `#${options.selector}`;
  if (options.loading === true)
    options.loading = { render: "\u7ED8\u5236\u6D77\u62A5\u4E2D...", create: "\u751F\u6210\u56FE\u7247\u4E2D..." };
  if (isObject(options.loading)) {
    options.loading.render = (_b = (_a = options.loading) == null ? void 0 : _a.render) != null ? _b : "\u7ED8\u5236\u6D77\u62A5\u4E2D...";
    options.loading.create = (_d = (_c = options.loading) == null ? void 0 : _c.create) != null ? _d : "\u751F\u6210\u56FE\u7247\u4E2D...";
  }
  return options;
};
const helperPluginParams = (plugins, ...args) => {
  if (!args[0])
    throw new Error("DrawPoster Error: plugins arguments required");
  let _options = { name: "" };
  if (isString(args[0]) && isFunction(args[1])) {
    _options.name = args[0];
    _options.mounted = args[1];
  }
  if (isString(args[0]) && isObject(args[1]))
    _options = __spreadValues({ name: args[0] }, args[1]);
  if (isObject(args[0]))
    _options = args[0];
  if (![...globalPlugins, ...plugins].some((v) => _options.name === v.name)) {
    plugins.push(_options);
    return _options;
  }
  console.warn(`\u8BE5\u6269\u5C55\u5DF2\u5B58\u5728: ${_options.name}`);
};
export {
  helper,
  helperPluginParams
};
