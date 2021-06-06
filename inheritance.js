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
  login() {
    return `you are logined in`;
  }
}

class subAdmin extends userInfo {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return `i am subadmin`;
  }
  login() {
    return `login for admin only`;
  }
}

const tom = new subAdmin("tom", "hsjhsjhsj");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
