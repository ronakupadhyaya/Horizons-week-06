var obj = {
  a: 1,
  b: 2,
  c: 3
};
var {a} = obj;
console.log(a); //obj.a




profile = {
  name: 'seb',
  email: 'seb@gmail.com'
};

// var {email} = profile;
// console.log(email);


let printEmail = ({email}) => {
  console.log(email);
};
printEmail(profile);


//set defaults
var myFunc = function(state, action = {
    type: 'REFRESH'
  }) {
  console.log(state);
  console.log(action);
}
myFunc([1, 2], {
  type: 'GET DATA'
});
myFunc([1, 3]);