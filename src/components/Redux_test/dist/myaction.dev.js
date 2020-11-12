"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Add = Add;
exports.Change = Change;
var add = 'add';
var change = 'change';

function Add(text) {
  return {
    type: add,
    text: text
  };
}

function Change(value) {
  return {
    type: change,
    value: value
  };
}