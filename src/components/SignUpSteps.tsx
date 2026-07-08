import { CgChevronLeft } from "react-icons/cg";
import Button from "./Button";
import { FaSpotify } from "react-icons/fa";
import { useContext } from "react";
import { authContext } from "../pages/auth/context";

type SignUpStepsProps = {
  children: React.ReactNode;
  steps: { step: number; label: string };
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const SignUpSteps = ({ children, steps, setStep }: SignUpStepsProps) => {
  const { wrongPass, registerData } = useContext(authContext);

  const NextStep = () => {
    if (steps.step === 1) {
      if (Object.values(wrongPass).includes(false)) {
        return;
      } else {
        setStep(2);
      }
    }
    if (steps.step === 2){
      if(!registerData.fullName || !registerData.Dob || !registerData.gender ){
        return;
      } else{
        setStep(3)
      }
    }
    if (steps.step > 1) {
      setStep(steps.step + 1);
    }
  };
  const prevStep = () => {
    setStep(steps.step - 1);
  };

  return (
    <div className=" text-white bg-black  flex flex-col justify-center items-center min-h-screen">
      <div className="lg:w-md w-sm flex flex-col  justify-center gap-5 py-10">
        <div className="flex items-center justify-center">
          <FaSpotify size={50} color="green" />
        </div>
        <div className="flex w-full bg-gray-500">
          <div
            style={{
              width: steps.step === 1 ? "0" : steps.step === 2 ? "50%" : "100%",
            }}
            className={` h-0.5 bg-green-500`}
          ></div>
        </div>
        <div className="flex gap-4 items-center ">
          <button onClick={prevStep}>
            <CgChevronLeft size={30} />
          </button>
          <div className="flex flex-col gap-1">
            <p className="text-gray-300">Step {steps.step} of 3</p>
            <h4 className="font-bold">{steps.label}</h4>
          </div>
        </div>
        <div className="pl-10 ">{children}</div>

        <Button
          label={steps.step === 3 ? "Sign Up" : "Next"}
          onClick={NextStep}
        />
      </div>
    </div>
  );
};

export default SignUpSteps;
