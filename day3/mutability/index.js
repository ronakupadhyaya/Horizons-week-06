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
	// .concat modifies in place and returns a copy, .slice modifies in place and returns a copy
	return list.concat(0);
}

function removeCounter(list, index) {
//slice: inclusive of first argument, exclusive of the second
	return list.slice(0,index)
	.concat(list.slice(index+1));
}
//review slice and splice!!!

function incrementCounter(list, index) {
	return list
	.slice(0,index)
	.concat(list[index]+1)
	.concat(list.slice(index+1))
}

function toggleTodo(todo) {
  // todo.completed = !todo.completed;
  return Object.assign({},todo,{
  	completed: !todo.completed
  })
 // return todo;
}
