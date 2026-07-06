import React, { useState } from "react";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";
import SignUpSteps from "../components/SignUpSteps";

const SignUp = () => {
  const [step, setStep] = useState<number>(0);

  const steps: { step: number; label: string }[] = [
    { step: 0, label: "Email" },
    { step: 1, label: "Create a password" },
    { step: 2, label: "Tell us about yourself" },
    { step: 3, label: "Terms and Conditions" },
  ];

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
          />
          <Button label="Next" onClick={() => setStep(1)} />
        </div>
      </AuthLayout>
    );
  }

  if (step === 1) {
    return (
      <SignUpSteps steps={steps[step]} setStep={setStep}>
        <h1>passsjdjiewjjsd</h1>
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
      <div className="flex flex-col gap-5" >
        <div>

        <label className="flex gap-3  cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-5 accent-green-500"
          />
          <p>
            I would prefer not to receive messages
            from spotify
          </p>
        </label>

       

      </div>
      <div className="">
         <label className="flex gap-3  cursor-pointer ">
          <input
            type="checkbox"
            className="w-7 h-5 "
          />
          <p>
             Share my registration data with Spotify's content providers for marketing purposes.
          
          </p>
        </label>
      </div>

      <div className="mt-8  text-sm leading-7">

        <p><b>
          spotify is a personalised service.
        </b>
        </p>

        <p className="mt-3">
         <b> By clicking Sign Up, you agree to spotify </b>
          <div className="text-green-500 cursor-pointer">
            {" "} <u>Terms & Conditions</u> 
          </div>
        </p>

        <p className="mt-3">
          <b>By clicking Sign Up, you agree to the</b>
          <div className="text-green-500 cursor-pointer">
            {" "} <u> spotify Privacy Policy</u>
          </div>
        </p>

      </div>

     

    </div>
  

    </SignUpSteps>
  );
};

export default SignUp;
