const uno = () => {
  console.log("I am ONE");
};
const hno = () => {
  setTimeout(() => {
    console.log("I AM WAITED");
  }, 3000);
  console.log("I am TWO");
};
const kno = () => {
  console.log("I am THREE");
};

uno();
hno();
kno();
