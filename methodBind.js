const barath = {
  firstName: "barath",
  initial: "R",
  role: "student",
  courseNum: 5,
  getInfo: function () {
    console.log(`
        the first anme is ${this.firstName}
        initial is ${this.initial}
        his role is ${this.role}
        has taken ${this.courseNum} courses...
        `);
  },
};

const kumar = {
  firstName: "Kumar",
  initial: "R",
  role: "teacher",
  courseNum: 6,
};
barath.getInfo();
// barath.getInfo.bind(kumar)();
// var answer = barath.getInfo.bind(kumar);
// answer();
barath.getInfo.call(kumar);
