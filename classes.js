class userInfo {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = [];
  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCount() {
    return this.#courseList;
  }
}

module.exports = userInfo;

const kumar = new userInfo("kumar", "hagdhajdgjagd");
console.log(kumar.getInfo());
kumar.enrollCourse("angular");
console.log(kumar.getCount());
console.log(kumar.courseList);
