// var valueReturn = Math.max(1, 4, 2, 9, 8, 6);
// console.log(valueReturn);

// var myObj = {};
// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { h: 6, k: 9 });
// console.log(myObj);

function mysum(a, b) {
  return a + b;
}
var myob = [5, 4];

//console.log(mysum(...myob)); //spread operator

function sumTwo(a, b, ...args) {
  //rest operator
  console.log(args);
  let multi = a * b;
  let sum = 0;
  for (let val of args) {
    sum = sum + val;
  }
  return [sum, multi];
}

console.log(sumTwo(2, 3, 5, 3, 9, 0));
