"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _rootreducer = _interopRequireDefault(require("./rootreducer"));

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Store = (0, _redux.createStore)(_rootreducer["default"], {
  todo: ['1asd'],
  TF: false
});

Store.dispatchShow = function (action, show, payload) {
  if (show) {
    console.log(Store.getState());
    console.log(action);
    Store.dispatch(action, payload);
    console.log(Store.getState());
  } else {
    Store.dispatch(action, payload);
  }
};

var _default = Store;
exports["default"] = _default;