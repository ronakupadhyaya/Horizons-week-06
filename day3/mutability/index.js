"use strict";

// INLINE EXERCISE: Mutability
//
// Open up index.html in your browser if you haven't already to run the
// tests.
//
// Each of the functions below (called by the tests) makes a fairly
// simple change to a list or an Object, but it does by mutating the
// object that's passed in. Rewrite each to work without mutating this
// object.

function addCounter(list) {
  return list.concat([0]);
}

function removeCounter(list, index) {
  return list.slice(0,index).concat(list.slice(index+1));
}

function incrementCounter(list, index) {
  return list.map(function(e,i) {return i===index ? e+1 : e});
}

function toggleTodo(todo) {
  return Object.assign({},todo,{completed : !todo.completed});
}
