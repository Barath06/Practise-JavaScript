const uno = () => {
  return "I am ONE";
};
// const hno = () => {
//   setTimeout(() => {
//     return "I am Two";
//   }, 3000);
// };

const hno = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I got that TWO ");
    }, 3000);
  });
};

const kno = () => {
  return "I am THREE";
};

const callMe = async () => {
  let val1 = uno();
  console.log(val1);
  let val2 = await hno();
  console.log(val2);
  let val3 = kno();
  console.log(val3);
};

callMe();
