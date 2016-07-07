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
	var newList = list.slice();
  newList.push(0);
  return newList;
}

function removeCounter(list, index) {
	var newList = list.slice();
  newList.splice(index, 1);
  return newList;
}

function incrementCounter(list, index) {
	var newList = list.slice();
  newList[index]++;
  return newList;
}

function toggleTodo(todo) {
	var todo2 = Object.assign({},todo);
  todo2.completed = !todo2.completed;
  return todo2;
}
