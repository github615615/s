"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancel_instance = exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cancel_instance; //let cancel2 = axios.CancelToken.source()

exports.cancel_instance = cancel_instance;

var instance = _axios["default"].create({
  //接受一个参数config配置
  baseURL: 'https://api.apiopen.top/',
  params: {
    type: "image",
    page: 6,
    count: 2
  },
  cancelToken: new _axios["default"].CancelToken(function (cancel) {
    exports.cancel_instance = cancel_instance = cancel;
  }) //cancelToken: cancel2.token  //这是新的取消请求，和上面的一样的

});

var _default = instance;
/* export {
    cancel2
} */

exports["default"] = _default;