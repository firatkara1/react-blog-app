//is logged in

export const isLoggedIn = () => {
  let data = localStorage.getItem("data");

  if (data != null) {
    return true;
  } else {
    return false;
  }
};

//do login

export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data.username);
  next();
};

//do logout

export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};

//current user

export const getCurrentUserDetail = () => {
  if (isLoggedIn()) {
    //return JSON.parse(localStorage.getItem("data"));
    const dataString = localStorage.getItem("data");
    const dataObject = JSON.parse(dataString);
    const userDto = dataObject.userDto;
    return userDto;
    //console.log("dataObject", dataObject);
  } else {
    return undefined;
  }
};

export const getToken = () => {
  if (isLoggedIn()) {
    // const data = JSON.parse(localStorage.getItem("data"));
    // const jwtToken = data.jwtToken;
    return JSON.parse(localStorage.getItem("data")).jwtToken;
  } else {
    return null;
  }
};
