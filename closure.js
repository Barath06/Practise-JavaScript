// function init() {
//   var firstname = "barath";
//   console.log("a am init");
//   function sayFirstName() {
//     console.log(firstname);
//   }
//   return sayFirstName;
// }

// var value = init();

// value();

function addNum(x) {
  return function (y) {
    return x + y;
  };
}
var answer = addNum(5);
console.log(answer(7));

console.log(addNum(8)(7));
