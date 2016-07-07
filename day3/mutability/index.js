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
  // list.push(0);
  // return list;
  return list.concat(0);
}

function removeCounter(list, index) {
  // list.splice(index, 1);
  // return list;
  return list.slice(0, index)
  	.concat(list.slice(index+1));
}

function incrementCounter(list, index) {
  // list[index]++;
  // return list;
  return list.slice(0, index)
  	.concat(list[index]+1)
  	.concat(list.slice(index+1));
}

function toggleTodo(todo) {
  // todo.completed = !todo.completed;
  var newTodo = Object.assign({}, todo);
  newTodo.completed = !newTodo.completed;
  return newTodo;
  // return todo;
}
