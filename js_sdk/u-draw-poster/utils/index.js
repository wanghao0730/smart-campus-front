"use strict";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "../chunk-4TPCCB4K.js";
const queryFields = (selector, componentThis, options) => {
  const query = componentThis ? uni.createSelectorQuery().in(componentThis) : uni.createSelectorQuery();
  return new Promise((resolve) => {
    query.select(selector).fields(options || {}, resolve).exec();
  });
};
const UNI_PLATFORM = (() => {
  if (typeof requirePlugin !== "undefined")
    return "mp-weixin";
  return "other";
})();
const promisify = (api) => {
  return (...args) => __async(void 0, null, function* () {
    return new Promise((resolve, reject) => {
      const [options, ...other] = args;
      api(__spreadProps(__spreadValues({}, options), { success: resolve, fail: reject }), ...other);
    });
  });
};
export {
  UNI_PLATFORM,
  promisify,
  queryFields
};
