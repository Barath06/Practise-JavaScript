var userInfo = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin`;
    case "user":
      return `${name} is user`;
    case "subadmin":
      return `${name} is subadmin`;
    default:
      return `${name} is nothing`;
      break;
  }
};

console.log(userInfo("barath", "user"));
userInfo("barath", "user");
userInfo("barath", "subadmin");
userInfo("barath", "mini");
