export function authDetail() {
  let user = JSON.parse(localStorage.getItem("user"));
  //let token = JSON.parse(localStorage.getItem("token"));
  

  if (user) {
    return user;
  }
  // if (token) {
  //   return token;
  // }
  else {
    return {
      role: "",
      password: "",
      email: "",
    };
  }
}
