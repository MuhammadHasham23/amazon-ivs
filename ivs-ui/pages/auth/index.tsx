import React from "react";
import { Auth } from "aws-amplify";
const Authentication = () => {
  const signUp = async () => {
    try {
      const email = "muhammadhasham2311@gmail.com";
      const confirmPassword = "Safdar2311@";
      const phone = "+923334353051";
      await Auth.signUp({
        username: email,
        password: confirmPassword,
        attributes: {
          email,
          name,
          phone_number: phone,
        },
      });
      console.log("Success!!");
    } catch (error) {
      console.error(error);
    }
  };

  const login = async () => {
    try {
      const email = "muhammadhasham2311@gmail.com";
      const confirmPassword = "Safdar2311@";
      await Auth.signIn(email, confirmPassword);
      console.log("Success!!");
    } catch (error) {
      console.error(error);
    }
  };

  const protectedRoute = async () => {
    try {
      let user = await Auth.currentAuthenticatedUser();
      if (user) {
        console.log(user);
      } else {
        console.log("not", user);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const signOut = async () => {
    try {
      const signOut = await Auth.signOut();
      console.log(signOut);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <button onClick={signUp}>Sign Up</button>
      <button onClick={login}>Login</button>
      <button onClick={protectedRoute}>Protected Route</button>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};
export default Authentication;
