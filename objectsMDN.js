// Another way of using objects

var User = {
  name: "",
  getName: function () {
    console.log(`the name is ${this.name}`);
  },
};

var barath = Object.create(User, {
  name: { value: "barath" },
  courseCount: { value: 4 },
});
console.log(barath.name);
barath.getName();
