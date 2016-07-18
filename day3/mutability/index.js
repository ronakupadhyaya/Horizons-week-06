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
  // return [].concat(list).push(0);
  var a = [].concat(list);
  a.push(0);
  return a;
}

function removeCounter(list, index) {
	var a = [].concat(list);
	a.splice(index, 1);
	return a;
}

function incrementCounter(list, index) {
	var a = [].concat(list);
	a[index]++;
	return a;
  // list[index]++;
  // return list;
}

function toggleTodo(todo) {
	var a = Object.assign({}, todo);
	a.completed = !a.completed;
	return a;
}
