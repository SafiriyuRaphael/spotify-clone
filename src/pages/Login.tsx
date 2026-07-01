import React from "react";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-5xl font-bold">Welcome back</h1>
      <label htmlFor="mail">Email</label>
      <input type="text" id="mail" placeholder="name@domain.com" />
      <Button label="Continue" />
    </div>
  );
};

export default Login;
