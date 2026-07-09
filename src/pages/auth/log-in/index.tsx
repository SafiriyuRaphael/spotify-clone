import React from "react";
import Button from "../../../components/Button";

const Login = () => {
  return (
    <div className="flex flex-col gap-3.5 ">
      <h1 className="text-5xl font-bold">Welcome back</h1>
      <label className="pt-4 " htmlFor="mail">Email</label>
      <input className="border-1 w-full py-3 px-1" type="text" id="mail" placeholder="  name@domain.com" />
      <Button label="Continue" />  
    </div>
  );
};

export default Login;
