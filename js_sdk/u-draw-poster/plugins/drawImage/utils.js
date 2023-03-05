"use strict";
import "../../chunk-4TPCCB4K.js";
const isBaseUrl = (str) => {
  return /^\s*data:(?:[a-z]+\/[\d+.a-z-]+(?:;[a-z-]+=[\da-z-]+)?)?(?:;base64)?,([\s\w!$%&'()*+,./:;=?@~-]*?)\s*$/i.test(str);
};
const isTmpUrl = (str) => {
  return /http:\/\/temp\/wx/.test(str);
};
const isNetworkUrl = (str) => {
  return /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w#%&+,./:=?@^~-]*[\w#%&+/=?@^~-])?$/.test(str);
};
const downloadImgUrl = (url) => {
  const isLocalFile = isBaseUrl(url) || isTmpUrl(url) || !isNetworkUrl(url);
  return new Promise((resolve, reject) => {
    if (isLocalFile)
      return resolve(url);
    uni.downloadFile({
      url,
      success: (res) => resolve(res.tempFilePath),
      fail: reject
    });
  });
};
export {
  downloadImgUrl,
  isBaseUrl,
  isNetworkUrl,
  isTmpUrl
};
