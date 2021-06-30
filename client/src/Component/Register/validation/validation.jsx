const isEmpty = (value) => {
  if (!value) {
    return true;
  } else {
    return false;
  }
};

const isEmail = (user_email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(user_email);
};

const isPassword = (password) => {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(password);
};

const isMatch = (password, cf_password) => {
  if (password === cf_password) {
    return true;
  } else {
    return false;
  }
};


module.exports = isEmpty;
module.exports = isEmail;
module.exports = isPassword;
module.exports = isMatch;

