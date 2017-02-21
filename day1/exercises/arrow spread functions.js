// var f1 = function(x, y) {
// 	return x + y;
// }

// var add = (x, y) => x + y;
// console.log(add(1, 2));


// // arrow functions 

// // replace the arrow function declaration with an anonymous function
// () => {
// 	console.log('Hi');
// } //() = no parameters


// function() {
// 	console.log("Hi");
// }

// // arrow functions 

// var items = [
// 	'Desk',
// 	'Chair',
// 	'Pen',
// 	'Printer'
// ];
// // REWRITE itemsLength using arrow functions
// var itemsLength = items.map(function(x) {
// 	return x.length;
// });

// var itemsLength = items.map((x) => x.length);


// // arrow functions 

// var numbers = [
// 	4,
// 	9,
// 	11,
// 	17
// ];
// // using arrow functions write
// var oddSquared = numbers.filter( /*arrow function that returns true if odd*/ ).map( /*arrow function that squares each number*/ );

// var oddSquared = numbers.filter((num) => num % 2).map((num) => num * num);


// // spread syntax
// function myFunction(x, y, z) {}
// var args = [0, 1, 2];
// // using spread syntax call myFunction with x=0,y=1,z=2
// myFunction(...args);

// // spread syntax
// //the function below should return a copy of any array, use spread operator to return a copy

// function arrCopier(arr) {
//   return [...arr];
// }

// // spread syntax
// // use spread operator to concat the arrays so that the numbers are in the correct order

// var arr1 = [3,4,5];
// var arr2 = [8,9];
// var arr3 = [1,2];
// var arr4 = [6];

// var sortedArr = [...arr3, ...arr1, ...arr4, ...arr2];
// console.log(sortedArr);

// rest syntax
// use rest parameter to rewrite the function f below. Remove the need to use the arguments object,call, and slice in the code below
// function f(a, b) {
//   var extraArgs = Array.prototype.slice.call(arguments, f.length);
//   console.log(extraArgs)
// }
// f(1,2,3,4); // => [3,4]

// function f(a, b, ...extraArgs){
// 	console.log([...arguments]);
// 	console.log(extraArgs);
// }

// f(1, 2, 3, 4);



// rest/spread syntax
// use rest/spread to rewrite the higher order function 'once' so that you no longer need arguments,slice,apply
//http://underscorejs.org/#once

function once(fn) {
  var ret;
  var called = false;
  return function(...args) {
    if(!called) {
      called = true;
      // var args = Array.prototype.slice.call(arguments);
      // ret = fn.apply(null, args);
      ret = fn(args);
    }
    return ret;
  }
}