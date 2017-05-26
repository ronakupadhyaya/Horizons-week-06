## Immutability


### [Watch the video]()

Replace the commented pieces of code in each of the snippets below to no longer cause a mutation of `myvar`. Do so without changing the output of the program.


Note: The official MDN documentation for [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) has a handy list of available functions on the left sidebar.


1. Adding to an array
```javascript
  var myvar = [1, 2, 3];

  myvar.push(4); // Mutation

  console.log(myvar);
  // Output: [1, 2, 3, 4]
```
1. Removing from the end of an array
```javascript
  var myvar = [1, 2, 3];

  myvar.pop(); // Mutation

  console.log(myvar);
  // Output: [1, 2]
```
1. Removing from the middle of an array
```javascript
  var myvar = [1, 2, 3, 4, 5];

  myvar.splice(2, 1); // Mutation

  console.log(myvar);
  // Output: [1, 2, 4, 5]
```
1. Changing each entry in an array
```javascript
  var myvar = [1, 2, 3];

  for (var i = 0; i < myvar.length; i++) {
    myvar[i] = myvar[i] * 10
  } // Mutation

  console.log(myvar);
  // Output: [10, 20, 30]
```
1. Array of arrays (2D array)
```javascript
  // Be careful not to mutate the outer array
  // OR any of the inner arrays
  var myvar = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
  ];

  myvar[1][1] = 5; // Mutation

  console.log(myvar);
  // Output: [
  //  [1, 2, 3],
  //  [4, 5, 6],
  //  [7, 8, 9]
  // ]
```
1. Add/change an object key
```javascript
  var myvar = { a: 10, b: 15 };

  myvar.b = 20; // Mutation
  myvar.c = 30; // Mutation

  console.log(myvar);
  // Output: { a: 10, b: 20 , c: 30 }
```
1. Remove an object key
```javascript
  // This one might be tricky
  var myvar = { a: 10, b: 15 };

  delete myvar.b;

  console.log(myvar);
  // Output: { a: 10 }
```
