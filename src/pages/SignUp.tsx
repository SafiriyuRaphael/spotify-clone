
import React from "react";
import Button from "../components/Button";

const SignUp = () => {
  return <div className="flex flex-col gap-5 items-center">
    <h1 className="text-3xl font-bold text-content">The place to find  and <br />listen to the latest music</h1>
     <label htmlFor="mail">Email</label>
      <input type="text" id="mail" placeholder="name@domain.com"className="border py-3  w-80  rounded-bl-xs" />
      <label htmlFor="password">password</label>
      <input type="text" id="password " placeholder="character and number"
      className="border py-3  w-80  rounded-bl-xs"
      />
<Button label="next"/>.
  </div>;
};

export default SignUp;
