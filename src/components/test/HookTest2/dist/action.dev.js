"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add_hook = add_hook;
var add = 'add_new_todo';

function add_hook(value) {
  return {
    type: add,
    value: value
  };
}