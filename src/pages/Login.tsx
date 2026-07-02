import React from "react";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-5xl font-bold">Welcome back</h1>
      <label htmlFor="mail" className="mr-72 translate-y-3" >Email</label>
      <input type="text" id="mail" placeholder="name@domain.com" className=" border py-3 w-80 rounded-bl-xs px-2"  />
      <Button label="Continue" />
      
    </div>
  );
};

export default Login;
