import React, { useContext, useState } from "react";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";
import SignUpSteps from "../components/SignUpSteps";
import { FaEye } from "react-icons/fa";
import { authContext } from "./auth/context";

const SignUp = () => {
  const [step, setStep] = useState<number>(0);
  const { registerData, setRegisterData } = useContext(authContext);

  const steps: { step: number; label: string }[] = [
    { step: 0, label: "Email" },
    { step: 1, label: "Create a password" },
    { step: 2, label: "Tell us about yourself" },
    { step: 3, label: "Terms and Conditions" },
  ];
  const getEmail = () => {
    if (!registerData.email) {
      return;
    } else {
      setStep(1);
    }
  };

  if (step === 0) {
    return (
      <AuthLayout>
        <div className="flex flex-col gap-5 items-center ">
          <h1 className="text-5xl font-bold text-center">
            {" "}
            Sign up to <br /> start listening{" "}
          </h1>
          <label htmlFor="mail" className="mr-56 translate-y-3">
            Email adresss{" "}
          </label>
          <input
            type="email"
            id="mail"
            placeholder="name@domain.com"
            className="border py-3 w-80 rounded-bl-xs px-2"
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          />

          <Button label="Next" onClick={getEmail} />
        </div>
      </AuthLayout>
    );
  }

  if (step === 1) {
    return (
      <SignUpSteps steps={steps[step]} setStep={setStep}>
        <div className="px-16">
          <label htmlFor="password" className="flex flex-col py-2 font-bold ">
            Password
          </label>

          <div className="border-2 flex justify-between w-4xs h-10 ">
            <input type="password" className="active:border-0" />{" "}
            <FaEye className="pr-1.5 size-8" />
          </div>
          <p className="font-bold">Your password must contain at least </p>
          <input type="radio" />
          <label htmlFor="text" className="px-1.5">
            1 letter
          </label>
          <br />
          <input type="radio" />
          <label htmlFor="text" className="px-1.5">
            1 number or special character example:#?!$
          </label>
          <br />
          <input type="radio" />
          <label htmlFor="text" className="px-1.5">
            {" "}
            10 characters
          </label>
        </div>
      </SignUpSteps>
    );
  }
  if (step === 2) {
    return (
      <SignUpSteps steps={steps[step]} setStep={setStep}>
        <h1>jjdsjjdjds</h1>
      </SignUpSteps>
    );
  }

  return (
    <SignUpSteps steps={steps[step]} setStep={setStep}>
      <div>kskksks</div>
    </SignUpSteps>
  );
};

export default SignUp;
