"use strict";
import {
  __async
} from "../chunk-4TPCCB4K.js";
const globalPlugins = [];
const getCurrentDrawPoster = (selector) => {
  const pages = getCurrentPages();
  const page = pages[pages.length - 1];
  if (page[`__dp_${selector}`])
    return page[`__dp_${selector}`];
};
const setCurrentDrawPoster = (dp, ps) => {
  const pages = getCurrentPages();
  const page = pages[pages.length - 1];
  page[`__dp_${dp.id}`] = dp;
  const onUnload = page.onUnload;
  page.onUnload = function() {
    ps.run("beforeUnmount");
    dp.stop();
    onUnload();
    ps.run("unmounted");
  };
};
const onReady = (callback) => __async(void 0, null, function* () {
  const pages = getCurrentPages();
  const page = pages[pages.length - 1];
  const onReady2 = page.onReady;
  return new Promise((resolve) => {
    page.onReady = function() {
      callback == null ? void 0 : callback();
      resolve();
      onReady2 == null ? void 0 : onReady2.call(page);
    };
  });
});
export {
  getCurrentDrawPoster,
  globalPlugins,
  onReady,
  setCurrentDrawPoster
};
