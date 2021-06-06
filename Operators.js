// var num1 = 7;
// var num2 = 9;
// console.log(num1 + num2);
// var check = num1 > num2;
// console.log(check);

var sellingPrice = 750;
var listPrice = 900;
var discount = ((listPrice - sellingPrice) / listPrice) * 100;
console.log("discount is :" + discount);

var correctDiscount = Math.round(discount);
console.log("Correct discount is:" + correctDiscount + "% off");

console.log(typeof listPrice);
