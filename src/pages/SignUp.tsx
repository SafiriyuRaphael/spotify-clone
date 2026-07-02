import React from "react";
import Button from "../components/Button";

const SignUp = () => {
  return   ( 
    <div className="flex flex-col gap-5 items-center ">
    <h1 className="text-5xl font-bold text-center"> Sign up to <br /> start listening </h1>
    <label htmlFor="mail" className="mr-56 translate-y-3">Email adresss  </label>
    <input type="email" id="mail" placeholder="name@domain.com" className="border py-3 w-80 rounded-bl-xs px-2" />
    <Button label="Next" />
  </div>
  );
};

export default SignUp;
