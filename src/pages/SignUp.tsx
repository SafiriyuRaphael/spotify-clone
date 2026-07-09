import React from "react";
import Button from "../components/Button";

const SignUp = () => {
  return <div className="flex flex-col gap-4">
  <div className="flex flex-col text-5xl text-center font-bold pb-4">
      <span><h1>Sign up to</h1></span>
      <span><h1>start listening</h1></span>
    </div> 
    <label>Email address</label>
    <input className="border-1 px-1 py-2" type="text" placeholder="Name@gmail.com" />
    <Button label="Next"></Button>
  </div>;
};

export default SignUp;
