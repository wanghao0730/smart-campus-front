"use strict";
import "../chunk-4TPCCB4K.js";
import { onReady } from "../helpers/internal";
import { helper } from "../helpers/params";
import { builder } from "./builder";
import { Plugins } from "./plugin";
function useDrawPoster(...args) {
  const dp = builder(helper(...args), onReady);
  dp.mount();
  return dp;
}
function createDrawPoster(...args) {
  return builder(helper(...args));
}
export {
  Plugins,
  createDrawPoster,
  useDrawPoster
};
