"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.toggleTodo = toggleTodo;
exports.setVisibilityFilter = setVisibilityFilter;
exports.VisibilityFilters = exports.SET_VISIBILITY_FILTER = exports.TOGGLE_TODO = exports.ADD_TODO = void 0;

/*
 * action 类型
 */
var ADD_TODO = 'ADD_TODO';
exports.ADD_TODO = ADD_TODO;
var TOGGLE_TODO = 'TOGGLE_TODO';
exports.TOGGLE_TODO = TOGGLE_TODO;
var SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
/*
 * 其它的常量
 */

exports.SET_VISIBILITY_FILTER = SET_VISIBILITY_FILTER;
var VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
/*
 * action 创建函数
 */

exports.VisibilityFilters = VisibilityFilters;

function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  };
}

function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index: index
  };
}

function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  };
}