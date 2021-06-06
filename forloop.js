//for loop

//var array1 = ["tn","kr","del",77,"kar",88,"odi"];
// for(var i = 0;i< array1.length;i++){
//     if(typeof array1[i] !== "number")
//         continue;
//     console.log(array1[i]);
// }

//while

// let i = 0;
// while(i< array1.length){
//     console.log(array1[i]);
//     i = i + 1;
// }

//do while

// let i = 0;
// do{
//     console.log(i)
//     i++;
// }while(i < 10);

//for each
// var array1 = ["tn","kr","del","kar","odi"];
// array1.forEach((s) => {
//     console.log(s);
// });

//for of

const names = ["youtube", "insta", "twitter", "amazon", "facebook"];

for (const n of names) {
  console.log(n);
}

//for in

const symbols = {
  yt: "YouTube",
  ig: "insta",
  fb: "facebook",
  gog: "geeks for geek",
};

for (const n in symbols) {
  console.log(symbols[n]);
}
