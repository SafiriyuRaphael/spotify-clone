import React, { useState } from "react";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";
import SignUpSteps from "../components/SignUpSteps";
import { FaEye } from "react-icons/fa";

const SignUp = () => {
  const [step, setStep] = useState<number>(0);
  const [Numbers, setNumber] = useState(1916)

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
            <Button label="Back"/>
        </div>
      </AuthLayout>
    );
  }

  if (step === 1) {
    return (
      <SignUpSteps steps={steps[step]} setStep={setStep}>
        <div className="space-y-2">
          <label htmlFor="password" className="flex flex-col font-bold ">
            Password
          </label>

          <div className="border-2 flex justify-between w-4xs h-10 ">
            <input type="password" className="active:border-0" />{" "}
            <FaEye className="pr-1.5 size-8" />
          </div>
          <p className="font-bold">Your password must contain at least </p>
          <input type="radio" />
          <label htmlFor="text" className="pl-1.5 text-sm">
            1 letter
          </label>
          <br />
          <input type="radio" />
          <label htmlFor="text" className="pl-1.5 text-sm">
            1 number or special character example:#?!$
          </label>
          <br />
          <input type="radio" />
          <label htmlFor="text" className="pl-1.5 text-sm">
            10 characters
          </label>
        </div>
      </SignUpSteps>
    );
  }
  if (step === 2) {
    return (
      <SignUpSteps steps={steps[step]} setStep={setStep}>
        <div className="flex flex-col gap-5">
          <div className="gap-2">
            <h1 className="text-bold">Name</h1>
            <p className="text-gray-500">This name will appear in your profile</p>
            <input className="border-1 w-full py-1.5" type="text" />
          </div>
          
          <div>
            <h1 className="text-bold">Date of Birth</h1>
            <p className="text-gray-500">Why do we need your date of birth? <a href=""> <u>Learn more</u></a> </p>

            <div className="flex justify-between pt-4">
              <div className="flex self-center ">
                <input type="number" placeholder="dd" className="border-1 w-20"/>
              </div>
            
              <div className="flex self-center">
                <select className="bg-black border-1">
                  <option value="Jan">January</option>
                  <option value="Feb">Febuary</option>
                  <option value="Mar">March</option>
                  <option value="Apr">April</option>
                  <option value="May">May</option>
                  <option value="Jun">June</option>
                  <option value="Jul">July</option>
                  <option value="Aug">August</option>
                  <option value="Sept">September</option>
                  <option value="Oct">October</option>
                  <option value="Nov">November</option>
                  <option value="Dec">December</option>
                </select>
              </div>
            
              <div className="flex self-center">
                <input type="number" placeholder="yyy" className="border-1 w-25"/>
              </div>

            </div>
            <div className="mt-7">
              <h1 className="text-bold">Gender</h1>
              <p className="text-gray-500 text-s">We use your to help personalise our content recommendation and ads for you </p>
              <div className="flex gap-5">
                <input type="radio" />
                <label className="" htmlFor="Male">Male</label>
                <input type="radio" />
                <label htmlFor="Female">Female</label>
              </div>

              <div className="flex     gap-5">
                <input type="radio" />
                <label htmlFor="others">Rather not say</label>
              </div>
            </div>
          </div>
        </div>
      </SignUpSteps>
    );
  }

  return (
    <SignUpSteps steps={steps[step]} setStep={setStep}>
      <div className="flex flex-col gap-5">
        <div>
          <label className="flex gap-3  cursor-pointer">
            <input type="checkbox" className="w-4 h-5 accent-green-500" />
            <p>I would prefer not to receive messages from spotify</p>
          </label>
        </div>
        <div className="">
          <label className="flex gap-3  cursor-pointer ">
            <input type="checkbox" className="w-7 h-5 " />
            <p>
              Share my registration data with Spotify's content providers for
              marketing purposes.
            </p>
          </label>
        </div>

        <div className="mt-8  text-sm leading-7">
          <p>
            <b>spotify is a personalised service.</b>
          </p>

          <p className="mt-3">
            <b> By clicking Sign Up, you agree to spotify </b>
            <div className="text-green-500 cursor-pointer">
              {" "}
              <u>Terms & Conditions</u>
            </div>
          </p>

          <p className="mt-3">
            <b>By clicking Sign Up, you agree to the</b>
            <div className="text-green-500 cursor-pointer">
              {" "}
              <u> spotify Privacy Policy</u>
            </div>
          </p>
        </div>
      </div>
    </SignUpSteps>
  );
};

export default SignUp;
