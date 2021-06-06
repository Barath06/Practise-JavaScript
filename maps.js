var mymaps = new Map();

mymaps.set(1, "Uno");
mymaps.set(2, "hno");
mymaps.set(3, "kno");
mymaps.set(4, "lno");
mymaps.set(5, "pno");
console.log(mymaps);

for (let [key, value] of mymaps) {
  console.log(`key is ${key} value is ${value}`);
}

mymaps.forEach((value, key) => {
  console.log(`${value} ${key}`);
});

mymaps.delete(1);
console.log(mymaps);
