import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios
    .post("/auth/create-user", user)
    .then((response) => response.data);
};

export const signIn = (loginDetail) => {
  return myAxios
    .post("/auth/login", loginDetail)
    .then((response) => response.data);
};
