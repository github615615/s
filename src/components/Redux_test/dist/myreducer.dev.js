"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _myaction = require("./myaction");

function todo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'add':
      var a = [];
      a[0] = action.text;
      if (state.todo) return state.todo.concat(a);else return [action.text];

    default:
      return state.todo;
    //它应该返回旧的store树中的todo的值！！因为每一次dispatch都会将action代入所有的reducer;
  }
}

function changeTodo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'change':
      return action.value;

    default:
      return state.TF;
  }
}

function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    todo: todo(state, action),
    //store树中的state之todo，那么这里也应该设置它的值为更新后的todo
    trueOrf: changeTodo(state, action)
  };
}

var _default = todos;
exports["default"] = _default;