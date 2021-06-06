//part-1

console.log(this);

var users = {
  name: "barathkumar",
  age: 20,
  initial: "R",
  getAge: function () {
    console.log(this.name);
    function simple1() {
      console.log(this);
    }
    simple1();
  },
};
users.getAge();
