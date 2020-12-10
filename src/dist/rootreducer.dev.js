"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createReducer;

var _myreducer = _interopRequireDefault(require("./components/Redux_test/myreducer"));

var _reducer = require("./components/test/HookTest2/reducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  //这里的state将是redux传递过来的整个store。而不只是单个state！
  return {
    // todo: todos(state = state, action = action).todo, //这个应该是store树中state之一
    // tf: todos(state = state, action = action).trueOrf,
    //应该是，每一次dispatch都会将action全部带入所有的reducer中去，然后，这就要求每一个reuducer最后必须返回一个它旧的值（state）
    // ...todos(state = state, action = action),
    todo: (0, _myreducer["default"])(state, action).todo,
    TF: (0, _myreducer["default"])(state, action).trueOrf,
    new_todo: (0, _reducer.add_hookX)(state.new_todo, action)
  };
}
/* export default function createRudecer(state = {}, action) {
    return {
        state1: reducer_state1(state = state, action = action), //这里是函数调用！reducer_state1()接受一些参数，然后根据这些参数，
        //返回一个新的state1！或者返回一个旧的state1
        state2: reducer_state2(state = state, action = action) //这是store树中的第二个state，也是同理，
        //这些state可以来自不同的组件！然后通过这个大rootreducer来集合它们
    }
} */