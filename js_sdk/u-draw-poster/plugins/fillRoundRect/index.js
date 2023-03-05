"use strict";
import "../../chunk-4TPCCB4K.js";
const plugin = {
  name: "__ctx-fillRoundRect__",
  mounted: ({ ctx }) => {
    ctx.fillRoundRect = (x, y, w, h, r) => ctx.roundRect(x, y, w, h, r, true);
  }
};
var fillRoundRect_default = () => plugin;
export {
  fillRoundRect_default as default
};
