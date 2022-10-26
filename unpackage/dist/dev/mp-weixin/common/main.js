(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!************************************************!*\
  !*** H:/spring-boot-emos/smart-campus/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, createApp) {__webpack_require__(/*! uni-pages */ 5);

var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 6));
var _uviewUi = _interopRequireDefault(__webpack_require__(/*! uview-ui */ 12));
var _index = _interopRequireDefault(__webpack_require__(/*! store/index.js */ 136));


var _zh = _interopRequireDefault(__webpack_require__(/*! @/common/locales/zh.js */ 140));
var _en = _interopRequireDefault(__webpack_require__(/*! @/common/locales/en.js */ 141));
var _vueI18nMin = _interopRequireDefault(__webpack_require__(/*! @/common/vue-i18n.min.js */ 142));



var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;_vue.default.config.productionTip = false;

// 判断市场常见的几种刘海屏机型
uni.getSystemInfo({
  success: function success(res) {
    var modelmes = res.model;
    if (modelmes.indexOf('iPhone X') >= 0 || modelmes.indexOf('iPhone XR') >= 0 || modelmes.indexOf(
    'iPhone XS') >= 0 || modelmes.indexOf('iPhone 12') >= 0 || modelmes.indexOf('iPhone 11') >=
    0 || modelmes.indexOf('iPhone11') >= 0 || modelmes.indexOf('iPhone12') >= 0 || modelmes.indexOf(
    'iPhoneXR') >= 0 || modelmes.indexOf('iPhoneX') >= 0) {
      _vue.default.prototype.$is_bang = true;
    } else {
      _vue.default.prototype.$is_bang = false;
    }
  } });

_vue.default.use(_vueI18nMin.default);
var i18n = new _vueI18nMin.default({
  // 默认语言
  locale: 'zh',
  // 引入语言文件
  messages: {
    'zh': _zh.default,
    'en': _en.default } });



// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
_vue.default.prototype._i18n = i18n;
//利用use安装uview 
_vue.default.use(_uviewUi.default);
_App.default.mpType = 'app';
var app = new _vue.default(_objectSpread({
  i18n: i18n,
  store: _index.default },
_App.default));

createApp(app).$mount();


//vue3版本
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!************************************************!*\
  !*** H:/spring-boot-emos/smart-campus/App.vue ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 7);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 9);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/*!*************************************************************************!*\
  !*** H:/spring-boot-emos/smart-campus/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 8);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/spring-boot-emos/smart-campus/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _this = void 0;var _default =
{
  globalData: {
    //全局开发者服务器接口地址
    // requesturl: 'https://www.szrdrp.com',//! 线上地址
    //本地测试地址
    requesturl: 'http://127.0.0.1:8080/emos-wx-api', // 测试地址
    //全局服务器接口地址
    socketurl: 'ws://localhost:8888',
    //全局socketTask对象
    socketTask: null,
    //全局socket重连次数
    socketreconnection: 0,
    //全局socket心跳
    socketheartbeat: null,
    //全局录音管理器
    recorderManager: null,
    //全局背景音频管理器
    backgroundAudioManager: null,
    //全局audio上下文对象
    innerAudioContext: null,
    //全局videoContext上下文对象
    videoContext: null,
    //全局系统信息
    SystemInfo: null,
    //全局动画实例 animation
    animation: null,
    //全局微信用户
    wxuser: null,
    //全局版本更新管理器对象
    updateManager: null,
    //临时admin全局开发者服务器接口地址
    admin_requesturl: 'http://localhost:8666',
    //腾讯地图key
    tx_map_key: 'Z2PBZ-LZOLJ-GK5FY-KD22I-W2MFJ-PSBCQ',
    //用户所在纬度
    latitude: '',
    //用户所在经度
    longitude: '',
    //自定义小程序导航栏 导航栏高度 = 状态栏高度 + 44
    customNav: {
      navBarHeight: 0, //记录导航栏的高度
      menuRight: 0, //胶囊距右方间距（方保持左、右间距一致）
      menuTop: 0, //胶囊距底部间距（保持底部间距一致）
      menuHeight: 0 // 胶囊高度（自定义内容可与胶囊高度保证一致）
    },
    /**发起网络请求。
        * @param {开发者服务器接口地址} url
        * @param {请求的参数} data
        * @param {必须大写，有效值在不同平台差异说明不同} method
        * @param {发送的请求类型默认不传就是json格式} flag
        */
    global_request: function global_request(url, data, method, flag) {
      var that = _this;
      var header = {
        'Content-Type': flag ? 'application/x-www-form-urlencoded' : 'application/json' };

      //判断是否有用户如果存在就获取token
      //这里写了两种方式一种key是authorization 一种是token选择适合的使用
      // if (getApp().globalData.wxuser) {
      // 	header.authorization = getApp().globalData.wxuser.token;
      // }
      if (getApp().globalData.wxuser) {
        header.token = getApp().globalData.wxuser.token;
      }
      // header.authorization = 'Bearer 5986d038-2d38-4624-92ba-526bed0034e6';
      /**
       * 使用Promise的方式解决回调问题 
       * 调用这个函数后返回一个promise
       * resolve方法接收成功回调
       * reject方法接收错误
       * 在外部可以使用调用时 可使用async await
       * */
      return new Promise(function (resolve, reject) {
        uni.request({
          url: url.split(':')[0] == 'http' ? url : getApp().globalData.requesturl + url,
          data: data,
          header: header,
          method: method,
          dataType: 'json',
          success: function success(res) {
            console.log("打印全局的数据", res);
            //请求是否发送成功以及成功接收到后端响应 statusCode为200
            if (res.statusCode == 200) {
              if (res.data.code == 200) {
                //! 成功后走resolve方法
                resolve(res.data);
              } else
              if (res.data.code == 401) {//认证失败							
                uni.showToast({
                  title: '登录已过期,请重新登录',
                  icon: 'none',
                  duration: 2500,
                  success: function success(res) {
                    //! 清除缓存
                    uni.removeStorageSync("wxuser");
                    getApp().globalData.wxuser = null;
                    //! 在这里可以加上处理跳转页面的方法
                  } });

              }
              // 后端自定义其他的code会走这里
              else {
                  getApp().globalData.global_Toast(true, res.data.msg, function (res) {});
                }
              //如果网络错误或者 后端设置了statuscode这里会判断
            } else {//如果是其他错误 500的状态码在这里提示
              uni.showToast({
                title: res.data ? res.data : '网络错误，请稍后再试',
                icon: 'none',
                duration: 2000 });

              // 将异常数据抛出
              reject(res);
            }
          },
          //请求发送失败的fail回调
          fail: function fail(err) {
            uni.showToast({
              title: '网络错误，请稍后再试',
              icon: 'none',
              duration: 2000 });

          } });

      });

    },
    /**将本地资源上传到开发者服务器，客户端发起一个 POST 请求，其中 content-type 为 multipart/form-data。
        * @param {开发者服务器 url} url
        * @param {接口调用成功的回调函数} callback
        */
    global_uploadFile: function global_uploadFile(url, callback) {
      uni.chooseMedia({
        count: 1,
        maxDuration: 30,
        success: function success(res) {
          var uploadTask = uni.uploadFile({
            url: getApp().globalData.requesturl + url,
            filePath: res.tempFiles[0].tempFilePath,
            name: 'file',
            success: function success(res) {
              if (res.statusCode == 200) {
                callback(res.data);
              } else {
                uni.showToast({
                  title: '网络错误，请稍后再试',
                  icon: 'none',
                  duration: 2000,
                  success: function success() {
                    uploadTask.abort();
                  } });

              }
            },
            fail: function fail(err) {
              uni.showToast({
                title: '网络错误，请稍后再试',
                icon: 'none',
                duration: 2000,
                success: function success() {
                  uploadTask.abort();
                } });

            },
            complete: function complete() {
              uni.hideLoading();
            } });

          uploadTask.onProgressUpdate(function (res) {
            uni.showLoading({
              title: '上传中' + res.progress + '%',
              mask: true });

            if (res.progress == 100) {
              uni.showToast({
                title: '上传成功',
                icon: 'success',
                duration: 2000 });

            }
          });
        } });

    },
    /**下载文件资源到本地，客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。
        * @param {下载资源的 url} url
        * @param {是否保存文件到本地} flag
        * @param {flag：下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'} ！flag：返回文件的保存路径，res = {savedFilePath: '文件的保存路径'}} callback
        */
    global_downloadFile: function global_downloadFile(url, flag, callback) {
      var downloadTask = uni.downloadFile({
        url: url,
        success: function success(res) {
          if (res.statusCode == 200) {
            if (flag) {
              uni.saveFile({
                tempFilePath: res.tempFilePath,
                success: function success(res) {
                  callback(res.savedFilePath);
                } });

            } else {
              callback(res.tempFilePath);
            }
          } else {
            uni.showToast({
              title: '网络错误，请稍后再试',
              icon: 'none',
              duration: 2000,
              success: function success() {
                downloadTask.abort();
              } });

          }
        },
        fail: function fail(err) {
          uni.showToast({
            title: '网络错误，请稍后再试',
            icon: 'none',
            duration: 2000,
            success: function success() {
              downloadTask.abort();
            } });

        },
        complete: function complete() {
          uni.hideLoading();
        } });

      downloadTask.onProgressUpdate(function (res) {
        uni.showLoading({
          title: '下载中' + res.progress + '%',
          mask: true });

        if (res.progress == 100) {
          uni.showToast({
            title: '下载成功',
            icon: 'success',
            duration: 2000 });

        }
      });
    },
    /**创建一个 WebSocket 连接。
        * @param {服务器接口地址} url
        * @param {监听WebSocket连接打开事件} onOpen
        * @param {监听WebSocket连接关闭事件} onClose
        */
    global_connectSocket: function global_connectSocket(url, onOpen, onClose) {
      getApp().globalData.socketTask = uni.connectSocket({
        url: getApp().globalData.socketurl + url,
        success: function success() {} });

      getApp().globalData.socketTask.onOpen(function () {
        getApp().globalData.socketreconnection = 0;
        if (onOpen) {
          onOpen();
        }
        getApp().globalData.socketstart();
      });
      getApp().globalData.socketTask.onClose(function (res) {
        if (res.code != 1000) {
          getApp().globalData.socketreconnection++;
          if (getApp().globalData.socketreconnection < 10 && getApp().globalData.socketTask.readyState != 1) {
            getApp().globalData.global_connectSocket(url, onOpen, onClose);
          }
          if (getApp().globalData.socketreconnection == 10 && getApp().globalData.socketTask.readyState != 1) {
            getApp().globalData.socketTask = null;
          }
        } else {
          if (onClose) {
            onClose();
          }
          getApp().globalData.socketend();
        }
      });
      getApp().globalData.socketTask.onError(function (res) {});
      getApp().globalData.socketTask.onMessage(function (res) {});
    },
    /**
        * socket心跳开始
        */
    socketstart: function socketstart() {
      if (getApp().globalData.socketTask && getApp().globalData.socketTask.readyState == 1) {
        getApp().globalData.socketheartbeat = setInterval(function () {
          getApp().globalData.socketTask.send({
            data: 'jump' });

        }, 1000);
      }
    },
    /**
        * socket心跳结束
        */
    socketend: function socketend() {
      clearInterval(getApp().globalData.socketheartbeat);
      getApp().globalData.socketTask = null;
    },
    /**保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
        * @param {需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，path为下一个页面的路径，下一个页面的onLoad函数可得到传递的参数} url
        * @param {接口调用成功的回调函数} callback
        */
    global_navigateTo: function global_navigateTo(url, callback) {
      uni.navigateTo({
        url: url,
        success: function success(res) {
          callback(res);
        } });

    },
    /**关闭当前页面，跳转到应用内的某个页面。
        * @param {需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'} url
        * @param {接口调用成功的回调函数} callback
        */
    global_redirectTo: function global_redirectTo(url, callback) {
      uni.redirectTo({
        url: url,
        success: function success(res) {
          callback(res);
        } });

    },
    /**关闭所有页面，打开到应用内的某个页面。
        * @param {需要跳转的应用内页面路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数} url
        * @param {接口调用成功的回调函数} callback
        */
    global_reLaunch: function global_reLaunch(url, callback) {
      uni.reLaunch({
        url: url,
        success: function success(res) {
          callback(res);
        } });

    },
    /**跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
        * @param {需要跳转的 tabBar 页面的路径（需在 pages.json 的 tabBar 字段定义的页面），路径后不能带参数} url
        * @param {接口调用成功的回调函数} callback
        */
    global_switchTab: function global_switchTab(url, callback) {
      uni.switchTab({
        url: url,
        success: function success(res) {
          callback(res);
        } });

    },
    /**关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
        * @param {返回的页面数，如果 delta 大于现有页面数，则返回到首页} delta
        * @param {接口调用成功的回调函数} callback
        */
    global_navigateBack: function global_navigateBack(delta, callback) {
      if (!delta) {
        delta = 1;
      }
      uni.navigateBack({
        delta: delta });

      var pages = getCurrentPages();
      var page = pages[pages.length - delta - 1];
      callback(page.$vm);
    },
    /**将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
        * @param {本地缓存中的指定的 key} key
        * @param {需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象} data
        * @param {接口调用成功的回调函数} callback
        */
    global_setStorage: function global_setStorage(key, data, callback) {
      uni.setStorage({
        key: key,
        data: data,
        success: function success(res) {
          callback(res);
        } });

    },
    /**将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
        * @param {本地缓存中的指定的 key} key
        * @param {需要存储的内容，只支持原生类型、及能够通过 JSON.stringify 序列化的对象} data
        */
    global_setStorageSync: function global_setStorageSync(key, data) {
      uni.setStorageSync(key, data);
    },
    /**从本地缓存中异步获取指定 key 对应的内容。
        * @param {本地缓存中的指定的 key} key
        * @param {接口调用的回调函数，res = {data: key对应的内容}} callback
        */
    global_getStorage: function global_getStorage(key, callback) {
      uni.getStorage({
        key: key,
        success: function success(res) {
          callback(res.data);
        },
        fail: function fail(err) {
          callback(err);
        } });

    },
    /**从本地缓存中同步获取指定 key 对应的内容。
        * @param {本地缓存中的指定的 key} key
        * @param {接口调用成功的回调函数} callback
        */
    global_getStorageSync: function global_getStorageSync(key, callback) {
      callback(uni.getStorageSync(key));
    },
    /**异步获取当前 storage 的相关信息。
        * @param {接口调用的回调函数，详见返回参数说明} callback
        */
    global_getStorageInfo: function global_getStorageInfo(callback) {
      uni.getStorageInfo({
        success: function success(res) {
          callback(res.keys);
        } });

    },
    /**同步获取当前 storage 的相关信息。
        * @param {接口调用成功的回调函数} callback
        */
    global_getStorageInfoSync: function global_getStorageInfoSync(callback) {
      callback(uni.getStorageInfoSync().keys);
    },
    /**从本地缓存中异步移除指定 key。
        * @param {本地缓存中的指定的 key} key
        * @param {接口调用的回调函数} callback
        */
    global_removeStorage: function global_removeStorage(key, callback) {
      uni.removeStorage({
        key: key,
        success: function success(res) {
          callback(res);
        } });

    },
    /**从本地缓存中同步移除指定 key。
        * @param {本地缓存中的指定的 key} key
        */
    global_removeStorageSync: function global_removeStorageSync(key) {
      uni.removeStorageSync(key);
    },
    /**获取当前的地理位置、速度。 在微信小程序中，当用户离开应用后，此接口无法调用，除非申请后台持续定位权限；当用户点击“显示在聊天顶部”时，此接口可继续调用。
        * @param {接口调用成功的回调函数，返回内容详见返回参数说明} callback
        */
    global_getLocation: function global_getLocation(callback) {
      uni.getLocation({
        type: 'gcj02',
        success: function success(res) {
          callback(res);
        } });

    },
    /**打开地图选择位置。
        * @param {接口调用成功的回调函数，返回内容详见返回参数说明} callback
        */
    global_chooseLocation: function global_chooseLocation(callback) {
      var that = this;
      uni.chooseLocation({
        success: function success(res) {
          uni.request({
            url: 'https://apis.map.qq.com/ws/geocoder/v1',
            data: {
              location: res.latitude + ',' + res.longitude,
              key: that.tx_map_key },

            method: 'GET',
            dataType: 'json',
            success: function success(res) {
              callback(res);
            } });

        } });

    },
    /**使用应用内置地图查看位置。
        * @param {纬度，范围为-90~90，负数表示南纬，使用 gcj02 国测局坐标系	} latitude
        * @param {经度，范围为-180~180，负数表示西经，使用 gcj02 国测局坐标系	} longitude
        * @param {接口调用成功的回调函数} callback
        */
    global_openLocation: function global_openLocation(latitude, longitude, callback) {
      uni.openLocation({
        latitude: latitude,
        longitude: longitude,
        success: function success(res) {
          callback(res);
        } });

    },
    /**预览图片。
        * @param {需要预览的图片链接列表} urls
        */
    global_previewImage: function global_previewImage(urls) {
      uni.previewImage({
        urls: urls,
        indicator: 'default' });

    },
    /**获取图片信息。
        * @param {图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径} src
        * @param {是否保存图片到系统相册} flag
        * @param {flag：保存调用结果 !flag：不保存获取图片信息} callback
        */
    global_getImageInfo: function global_getImageInfo(src, flag, callback) {
      uni.getImageInfo({
        src: src,
        success: function success(res) {
          if (flag) {
            uni.saveImageToPhotosAlbum({
              filePath: res.path,
              success: function success(res) {
                callback(res);
              } });

          } else {
            callback(res);
          }
        } });

    },
    /**获取全局唯一的录音管理器 recorderManager。
        * @param {start：开始录音 pause：暂停录音 resume：继续录音 stop：停止录音} action
        * @param {录音开始事件} onStart
        * @param {录音暂停事件} onPause
        * @param {录音停止事件，会回调文件地址} onStop
        */
    global_getRecorderManager: function global_getRecorderManager(action, onStart, onPause, onStop) {
      if (getApp().globalData.recorderManager == null) {
        getApp().globalData.recorderManager = uni.getRecorderManager();
      }
      if ('start' == action) {
        getApp().globalData.recorderManager.start({
          duration: 600000,
          sampleRate: 44100,
          encodeBitRate: 320000,
          format: 'mp3' });

      } else if ('pause' == action) {
        getApp().globalData.recorderManager.pause();
      } else if ('resume' == action) {
        getApp().globalData.recorderManager.resume();
      } else if ('stop' == action) {
        getApp().globalData.recorderManager.stop();
      }
      getApp().globalData.recorderManager.onStart(function (res) {
        if (onStart) {
          onStart();
        }
      });
      getApp().globalData.recorderManager.onPause(function (res) {
        if (onPause) {
          onPause();
        }
      });
      getApp().globalData.recorderManager.onStop(function (res) {
        if (onStop) {
          onStop(res.tempFilePath);
        }
      });
      getApp().globalData.recorderManager.onError(function (res) {
      });
    },
    /**获取全局唯一的背景音频管理器 backgroundAudioManager。
        * @param {backgroundAudioManager 对象的属性列表 src：音频的数据源，默认为空字符串，当设置了新的 src 时，会自动开始播放，目前支持的格式有 m4a, aac, mp3, wav title：音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。 epname：专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 singer：歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 coverImgUrl：封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。	webUrl：页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值 seek：跳转到指定位置，单位 s} attribute
        * @param {play：播放 pause：暂停 stop：停止} action
        * @param {背景音频进入可以播放状态，但不保证后面可以流畅播放} onCanplay
        * @param {背景音频播放事件} onPlay
        * @param {背景音频暂停事件} onPause
        * @param {背景音频停止事件} onStop
        * @param {背景音频自然播放结束事件} onEnded
        * @param {背景音频播放进度更新事件} onTimeUpdate
        */
    global_getBackgroundAudioManager: function global_getBackgroundAudioManager(attribute, action, onCanplay, onPlay, onPause, onStop, onEnded, onTimeUpdate) {
      if (getApp().globalData.backgroundAudioManager == null) {
        getApp().globalData.backgroundAudioManager = uni.getBackgroundAudioManager();
      }
      if ('play' == action) {
        getApp().globalData.backgroundAudioManager.src = attribute.src ? attribute.src : '';
        getApp().globalData.backgroundAudioManager.startTime = 0;
        getApp().globalData.backgroundAudioManager.title = attribute.title ? attribute.title : '';
        getApp().globalData.backgroundAudioManager.epname = attribute.epname ? attribute.epname : '';
        getApp().globalData.backgroundAudioManager.singer = attribute.singer ? attribute.singer : '';
        getApp().globalData.backgroundAudioManager.coverImgUrl = attribute.coverImgUrl ? attribute.coverImgUrl : '';
        getApp().globalData.backgroundAudioManager.webUrl = attribute.webUrl ? attribute.webUrl : '';
        getApp().globalData.backgroundAudioManager.play();
      } else if ('pause' == action) {
        if (!getApp().globalData.backgroundAudioManager.paused) {
          getApp().globalData.backgroundAudioManager.pause();
        } else if (getApp().globalData.backgroundAudioManager.paused) {
          getApp().globalData.backgroundAudioManager.play();
        }
      } else if ('stop' == action) {
        getApp().globalData.backgroundAudioManager.stop();
      }
      if (attribute.seek) {
        getApp().globalData.backgroundAudioManager.seek(attribute.seek);
      }
      getApp().globalData.backgroundAudioManager.onCanplay(function (res) {
        if (onCanplay) {
          onCanplay();
        }
      });
      getApp().globalData.backgroundAudioManager.onPlay(function (res) {
        if (onPlay) {
          onPlay();
        }
      });
      getApp().globalData.backgroundAudioManager.onPause(function (res) {
        if (onPause) {
          onPause();
        }
      });
      getApp().globalData.backgroundAudioManager.onStop(function (res) {
        if (onStop) {
          onStop();
        }
      });
      getApp().globalData.backgroundAudioManager.onEnded(function (res) {
        if (onEnded) {
          onEnded();
        }
      });
      getApp().globalData.backgroundAudioManager.onTimeUpdate(function (res) {
        if (onTimeUpdate) {
          onTimeUpdate();
        }
      });
      getApp().globalData.backgroundAudioManager.onError(function (res) {
      });
    },
    /**创建并返回内部 audio 上下文 innerAudioContext 对象。
        * @param {音频的数据链接，用于直接播放} src
        * @param {play：播放 pause：暂停 stop：停止} action
        * @param {跳转到指定位置，单位 s} seek
        * @param {音频进入可以播放状态，但不保证后面可以流畅播放} onCanplay
        * @param {音频播放事件} onPlay
        * @param {音频暂停事件} onPause
        * @param {音频停止事件} onStop
        * @param {音频自然播放结束事件} onEnded
        * @param {音频播放进度更新事件} onTimeUpdate
        */
    global_createInnerAudioContext: function global_createInnerAudioContext(src, action, seek, onCanplay, onPlay, onPause, onStop, onEnded, onTimeUpdate) {
      if (getApp().globalData.innerAudioContext == null) {
        getApp().globalData.innerAudioContext = uni.createInnerAudioContext();
      }
      getApp().globalData.innerAudioContext.src = src;
      getApp().globalData.innerAudioContext.volume = 1;
      if ('play' == action) {
        getApp().globalData.innerAudioContext.play();
      } else if ('pause' == action) {
        getApp().globalData.innerAudioContext.pause();
      } else if ('stop' == action) {
        getApp().globalData.innerAudioContext.stop();
      }
      if (seek) {
        getApp().globalData.innerAudioContext.seek(seek);
      }
      getApp().globalData.innerAudioContext.onCanplay(function (res) {
        if (onCanplay) {
          onCanplay();
        }
      });
      getApp().globalData.innerAudioContext.onPlay(function (res) {
        if (onPlay) {
          onPlay();
        }
      });
      getApp().globalData.innerAudioContext.onPause(function (res) {
        if (onPause) {
          onPause();
        }
      });
      getApp().globalData.innerAudioContext.onStop(function (res) {
        if (onStop) {
          onStop();
        }
      });
      getApp().globalData.innerAudioContext.onEnded(function (res) {
        if (onEnded) {
          onEnded();
        }
      });
      getApp().globalData.innerAudioContext.onTimeUpdate(function (res) {
        if (onTimeUpdate) {
          onTimeUpdate();
        }
      });
      getApp().globalData.innerAudioContext.onError(function (res) {
      });
    },
    /**创建并返回 video 上下文 videoContext 对象。在自定义组件下，第二个参数传入组件实例this，以操作组件内 <video> 组件。
        * @param {video组件的Id} videoId
        * @param {play：播放 pause：暂停 stop：停止} action
        * @param {跳转到指定位置，单位 s} seek
        * @param {发送弹幕，danmu 包含两个属性 text, color} sendDanmu
        * @param {进入全屏，可传入{direction}参数，详见 video 组件文档} requestFullScreen
        * @param {退出全屏} exitFullScreen
        */
    global_createVideoContext: function global_createVideoContext(videoId, action, seek, sendDanmu, requestFullScreen, exitFullScreen) {
      if (videoId) {
        getApp().globalData.videoContext = uni.createVideoContext(videoId, this);
      }
      if ('play' == action) {
        getApp().globalData.videoContext.play();
      } else if ('pause' == action) {
        getApp().globalData.videoContext.pause();
      } else if ('stop' == action) {
        getApp().globalData.videoContext.stop();
      }
      if (seek) {
        getApp().globalData.videoContext.seek(seek);
      }
      if (sendDanmu) {
        getApp().globalData.videoContext.sendDanmu(sendDanmu);
      }
      if (requestFullScreen) {
        getApp().globalData.videoContext.requestFullScreen();
      }
      if (exitFullScreen) {
        getApp().globalData.videoContext.exitFullScreen();
      }
    },
    /**拨打电话。
        * @param {需要拨打的电话号码} phoneNumber
        * @param {接口调用成功的回调} callback
        */
    global_makePhoneCall: function global_makePhoneCall(phoneNumber, callback) {
      uni.makePhoneCall({
        phoneNumber: phoneNumber,
        success: function success(res) {
          callback(res);
        } });

    },
    /**调起客户端扫码界面，扫码成功后返回对应的结果。
        * @param {接口调用成功的回调，返回内容详见返回参数说明} callback
        */
    global_scanCode: function global_scanCode(callback) {
      uni.scanCode({
        success: function success(res) {
          callback(res);
        } });

    },
    /**设置/获取系统剪贴板的内容
        * @param {set：设置系统剪贴板的内容 get：获取系统剪贴板内容} action
        * @param {需要设置的内容} data
        * @param {接口调用成功的回调} callback
        */
    global_ClipboardData: function global_ClipboardData(action, data, callback) {
      if ('set' == action) {
        uni.setClipboardData({
          data: data });

      } else if ('get' == action) {
        uni.getClipboardData({
          success: function success(res) {
            callback(res.data);
          } });

      }
    },
    /**显示/隐藏消息提示框
        * @param {flag：显示消息提示框 ！flag：隐藏消息提示框} flag
        * @param {提示的内容，长度与 icon 取值有关} title
        * @param {接口调用成功的回调函数} callbcak
        */
    global_Toast: function global_Toast(flag, title, callbcak) {
      if (flag) {
        uni.showToast({
          title: title,
          icon: 'none',
          duration: 2500,
          success: function success(res) {
            callbcak(res);
          } });

      } else {
        uni.hideToast();
      }
    },
    /**显示/隐藏loading提示框
        * @param {flag：显示loading提示框 ！flag：隐藏loading提示框} flag
        * @param {提示的内容} title
        * @param {接口调用成功的回调函数} callbcak
        */
    global_Loading: function global_Loading(flag, title, callbcak) {
      if (flag) {
        uni.showLoading({
          title: title,
          mask: true,
          success: function success(res) {
            callbcak(res);
          } });

      } else {
        uni.hideLoading();
      }
    },
    /**显示模态弹窗，类似于标准 html 的消息框：alert、confirm。
        * @param {提示的标题} title
        * @param {提示的内容} content
        * @param {是否显示取消按钮，默认为 true} showCancel
        * @param {接口调用成功的回调函数} callback
        */
    global_showModal: function global_showModal(title, content, showCancel, callback) {
      uni.showModal({
        title: title,
        content: content,
        showCancel: showCancel,
        success: function success(res) {
          if (res.confirm) {
            callback(true);
          } else if (res.cancel) {
            callback(false);
          }
        } });

    },
    /**​显示操作菜单
        * @param {按​显示操作菜单钮的文字数组} itemList
        * @param {接口调用成功的回调函数，详见返回参数说明} callback
        */
    global_showActionSheet: function global_showActionSheet(itemList, callback) {
      uni.showActionSheet({
        itemList: itemList,
        success: function success(res) {
          callback(res.tapIndex);
        } });

    },
    /**为 tabBar 某一项的右上角添加文本。
        * @param {tabBar的哪一项，从左边算起} index
        * @param {显示的文本，不超过 3 个半角字符} text
        * @param {接口调用成功的回调函数} callback
        */
    global_setTabBarBadge: function global_setTabBarBadge(index, text, callback) {
      uni.setTabBarBadge({
        index: index,
        text: text,
        success: function success(res) {
          callback(res);
        } });

    },
    /**移除 tabBar 某一项右上角的文本。
        * @param {tabBar的哪一项，从左边算起} index
        */
    global_removeTabBarBadge: function global_removeTabBarBadge(index, callback) {
      uni.removeTabBarBadge({
        index: index,
        success: function success(res) {
          callback(res);
        } });

    },
    /**显示 tabBar 某一项的右上角的红点。
        * @param {tabBar的哪一项，从左边算起} index
        * @param {接口调用成功的回调函数} callback
        */
    global_showTabBarRedDot: function global_showTabBarRedDot(index, callback) {
      uni.showTabBarRedDot({
        index: index,
        success: function success(res) {
          callback(res);
        } });

    },
    /**隐藏 tabBar 某一项的右上角的红点。
        * @param {tabBar的哪一项，从左边算起} index
        * @param {接口调用成功的回调函数} callback
        */
    global_hideTabBarRedDot: function global_hideTabBarRedDot(index, callback) {
      uni.hideTabBarRedDot({
        index: index,
        success: function success(res) {
          callback(res);
        } });

    },
    /**创建一个动画实例 animation。调用实例的方法来描述动画。最后通过动画实例的export方法导出动画数据传递给组件的animation属性。
        * @param {duration：动画持续时间，单位ms timingFunction：定义动画的效果 delay：动画延迟时间，单位 ms transformOrigin：设置transform-origin} attribute
        * @param {opacity：透明度，参数范围 0~1 backgroundColor：颜色值 width：长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 height：长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 top：长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 left：长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 bottom：长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 right：长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值} style
        */
    global_createAnimation: function global_createAnimation(attribute, style) {
      if (attribute) {
        getApp().globalData.animation = uni.createAnimation({
          duration: attribute.duration,
          timingFunction: attribute.timingFunction,
          delay: attribute.delay,
          transformOrigin: attribute.transformOrigin });

      }
      if (style && style.opacity) {
        getApp().globalData.animation.opacity(style.opacity);
      }
      if (style && style.backgroundColor) {
        getApp().globalData.animation.backgroundColor(style.backgroundColor);
      }
      if (style && style.width) {
        getApp().globalData.animation.width(style.width);
      }
      if (style && style.height) {
        getApp().globalData.animation.height(style.height);
      }
      if (style && style.top) {
        getApp().globalData.animation.top(style.top);
      }
      if (style && style.left) {
        getApp().globalData.animation.left(style.left);
      }
      if (style && style.bottom) {
        getApp().globalData.animation.bottom(style.bottom);
      }
      if (style && style.right) {
        getApp().globalData.animation.right(style.right);
      }
    },
    /**将页面滚动到目标位置。
        * @param {滚动到页面的目标位置（单位px）} scrollTop
        * @param {接口调用成功的回调函数} callback
        */
    global_pageScrollTo: function global_pageScrollTo(scrollTop, callback) {
      uni.pageScrollTo({
        scrollTop: scrollTop,
        success: function success(res) {
          callback(res);
        } });

    },
    /**获取服务供应商。
        * @param {服务类型，可取值见下面说明} service
        * @param {接口调用成功的回调} callback
        */
    global_getProvider: function global_getProvider(service, callback) {
      uni.getProvider({
        service: service,
        success: function success(res) {
          callback(res.provider[0]);
        } });

    },
    /**
        * 登录
        */
    global_login: function global_login(url, callback) {
      var that = this;
      uni.login({
        success: function success(res) {
          var data = {
            code: res.code };

          that.global_getUserInfo(function (res) {
            that.wxuser = res.userInfo;
            data.encrypted_data = res.encryptedData;
            data.iv = res.iv;
            data.signature = res.signature;
            data.userInfo = JSON.stringify(that.wxuser);
            that.global_request(url, data, 'POST', callback);
          });
        } });

    },
    /**获取用户信息。
        * @param {接口调用成功的回调} callback
        */
    global_getUserInfo: function global_getUserInfo(callback) {
      var that = this;
      uni.getUserInfo({
        withCredentials: true,
        lang: 'zh_CN',
        success: function success(res) {
          callback(res);
        } });

    },
    /**
        * 本API返回全局唯一的版本更新管理器对象： updateManager，用于管理小程序更新。
        */
    global_getUpdateManager: function global_getUpdateManager() {
      var that = this;
      if (that.updateManager == null) {
        that.updateManager = uni.getUpdateManager();
      }
      that.updateManager.onCheckForUpdate(function (res) {
      });
      that.updateManager.onUpdateReady(function (res) {
        uni.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function success(res) {
            if (res.confirm) {
              that.updateManager.applyUpdate();
            }
          } });

      });
      that.updateManager.onUpdateFailed(function (res) {
      });
    },
    /**空校验
        * @param {值} e
        * @param {提示标题} title
        */
    checkempty: function checkempty(e, title) {
      var that = this;
      if (e) {
        return true;
      } else {
        that.global_Toast(true, title + '不能为空', function (res) {});
        return false;
      }
    },
    /**手机号码校验
        * @param {手机号码} e
        */
    checkphone: function checkphone(e) {
      var that = this;
      var phone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if (phone.test(e)) {
        return true;
      } else {
        that.global_Toast(true, '手机号码格式有误', function (res) {});
        return false;
      }
    },
    /**时间戳转YYYY-MM-DD hh:mm:ss格式
        * @param {时间戳} e
        */
    formatDate: function formatDate(e) {
      var date = new Date(e);
      var YY = date.getFullYear() + '-';
      var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      var ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      return YY + MM + DD + ' ' + hh + mm + ss;
    },
    /**时间戳转YYYY-MM-DD格式
        * @param {时间戳} e
        */
    formatDate1: function formatDate1(e) {
      var date = new Date(e);
      var YY = date.getFullYear() + '-';
      var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      var ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      return YY + MM + DD;
    },
    /**时间戳转YYYY-MM 格式
        * @param {时间戳} e
        */
    formatDate2: function formatDate2(e) {
      var date = new Date(e);
      var YY = date.getFullYear() + '-';
      var MM = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      var DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      var ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      return YY + MM;
    },
    /**时间戳转YYYY年MM月 格式
        * @param {时间戳} e
        */
    formatDate3: function formatDate3(e) {
      var date = new Date(e);
      var YY = date.getFullYear();
      var MM = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      var DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      var ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      return YY + "年" + MM + "月";
    },
    /**时间戳转某某（年，月，日，时，分，秒）前
        * @param {时间戳} e
        */
    friendlyDate: function friendlyDate(e) {
      var formats = {
        year: '%n% 年前',
        month: '%n% 月前',
        day: '%n% 天前',
        hour: '%n% 小时前',
        minute: '%n% 分钟前',
        second: '%n% 秒前' };

      var now = Date.now();
      var seconds = Math.floor((now - parseInt(e)) / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);
      var months = Math.floor(days / 30);
      var years = Math.floor(months / 12);
      var diffType = '';
      var diffValue = 0;
      if (years > 0) {
        diffType = 'year';
        diffValue = years;
      } else {
        if (months > 0) {
          diffType = 'month';
          diffValue = months;
        } else {
          if (days > 0) {
            diffType = 'day';
            diffValue = days;
          } else {
            if (hours > 0) {
              diffType = 'hour';
              diffValue = hours;
            } else {
              if (minutes > 0) {
                diffType = 'minute';
                diffValue = minutes;
              } else {
                diffType = 'second';
                diffValue = seconds === 0 ? seconds = 1 : seconds;
              }
            }
          }
        }
      }
      return formats[diffType].replace('%n%', diffValue);
    },
    /** 
        * 判断传入时间与今日是否相同
        *  @param {时间 xxxx-xx-x}  
        * */
    filterDate: function filterDate(time) {
      //! 截取时间 
      var splitTime = time.split(" ")[0].split("-");
      //! 获取当前年 月日 
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      if (splitTime[0] == year && splitTime[1].toString(8) == month + 1 && splitTime[2] == day) {
        return true;
      } else {
        return false;
      }
    } },

  onLaunch: function onLaunch() {var _this2 = this;
    // 1.1.0版本之前关于http拦截器代码，已平滑移动到/common/http.interceptor.js中
    // 注意，需要在/main.js中实例化Vue之后引入如下(详见文档说明)：
    // import httpInterceptor from '@/common/http.interceptor.js'
    // Vue.use(httpInterceptor, app)
    // process.env.VUE_APP_PLATFORM 为通过js判断平台名称的方法，结果分别如下：
    /**
     * h5，app-plus(nvue下也为app-plus)，mp-weixin，mp-alipay......
     */
    //! 获取缓存数据  应用启动会执行onLaunch生命周期在这里获取用户数据
    this.globalData.global_getStorage("wxuser", function (res) {
      //! 重新设置回全局
      _this2.globalData.wxuser = res;
      // this.globalData.global_switchTab("pages/index/index",(value) => {})
    });
    //获取系统信息
    this.globalData.SystemInfo = uni.getSystemInfoSync();
    //动态根据系统信息数据计算自定义导航栏的高度
    //获取胶囊的位置
    var menuButtonInfo = uni.getMenuButtonBoundingClientRect();
    console.log("胶囊位置", menuButtonInfo);
    //计算导航栏的高度 导航栏高度 = 状态栏高度 + 44
    this.globalData.customNav.navBarHeight = this.globalData.SystemInfo.statusBarHeight + 44;
    this.globalData.customNav.menuRight = this.globalData.SystemInfo.screenWidth - menuButtonInfo.right;
    //导航栏上方的高度
    this.globalData.customNav.menuTop = menuButtonInfo.top;
    this.globalData.customNav.menuHeight = menuButtonInfo.height;

    console.log(this.globalData.customNav);
  },
  onShow: function onShow() {

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 9 */
/*!**********************************************************************************!*\
  !*** H:/spring-boot-emos/smart-campus/App.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 10);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 10 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/spring-boot-emos/smart-campus/App.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map