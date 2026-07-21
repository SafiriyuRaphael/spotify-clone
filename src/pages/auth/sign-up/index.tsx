import { useContext, useState } from "react";
import Button from "../../../components/Button";
import AuthLayout from "../../../components/AuthLayout";
import SignUpSteps from "../../../components/SignUpSteps";
import { authContext } from "../context";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import AuthContextProvider from "../context";

const SignUp = () => {
  const [step, setStep] = useState<number>(0);
  const { registerData, setRegisterData } = useContext(authContext);

  const steps: { step: number; label: string }[] = [
    { step: 0, label: "Email" },
    { step: 1, label: "Create a password" },
    { step: 2, label: "Tell us about yourself" },
    { step: 3, label: "Terms and Conditions" },
  ];

  const inputMail = () => {
    setRegisterData({ ...registerData, email: "green" });
  };

  const submitMail = () => {
    if (!registerData.email) {
      setStep(1);
      return;
    } else {
      setStep(1);
    }
  };

  return (
    <AuthContextProvider>
      {step === 0 && (
        <AuthLayout>
          <div className="flex flex-col gap-5 items-center ">
            <h1 className="text-5xl font-bold text-center">
              Sign up to <br /> start listening
            </h1>
            <label htmlFor="mail" className="mr-56 translate-y-3">
              Email adresss
            </label>
            <input
              type="email"
              placeholder="name@domain.com"
              className="border py-3 w-80 rounded-bl-xs px-2"
              value={registerData.email}
              onChange={inputMail}
            />
            <Button label="Next" onClick={submitMail} />
          </div>
        </AuthLayout>
      )}
      {step !== 0 && (
        <SignUpSteps steps={steps[step]} setStep={setStep}>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
        </SignUpSteps>
      )}
    </AuthContextProvider>
  );
};

export default SignUp;
