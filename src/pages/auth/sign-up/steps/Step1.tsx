import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authContext } from "../../context";

const Step1 = () => {
  const { registerData, setRegisterData, wrongPass, setWrongPass } =
    useContext(authContext);
  const [passwordType, setPasswordType] = useState(true);

  const authenticatePassword = (pass: string) => {
    setWrongPass({
      greaterThan10: pass.length >= 10,
      hasChars: /[\d.,@#!?$]/.test(pass),
      hasLetter: /[A-Za-z]/.test(pass),
    });
  };

  const writePassword = (text: string) => {
    setRegisterData({ ...registerData, password: text });

    authenticatePassword(text);
  };

  const toggleInputType = () => {
    setPasswordType(!passwordType);
  };

  return (
    <div className="space-y-2">
      <label htmlFor="password" className="flex flex-col font-bold ">
        Password
      </label>

      <div className="border flex justify-between w-4xs h-10 px-2">
        <input
          type={passwordType ? "password" : "text"}
          className="outline-0"
          onChange={(e) => writePassword(e.target.value)}
          value={registerData.password}
        />
        <button className="cursor-pointer" onClick={toggleInputType}>
          {!passwordType ? (
            <FaEye className="pr-1.5 size-8" />
          ) : (
            <FaEyeSlash className="pr-1.5 size-8" />
          )}
        </button>
      </div>
      <p className="font-bold">Your password must contain at least </p>
      <input
        className="accent-green-500"
        type="radio"
        checked={wrongPass.hasLetter}
      />
      <label htmlFor="text" className="pl-1.5 text-sm">
        1 letter
      </label>
      <br />
      <input
        className="accent-green-500"
        type="radio"
        checked={wrongPass.hasChars}
        readOnly
      />
      <label htmlFor="text" className="pl-1.5 text-sm">
        1 number or special character example:#?!$
      </label>
      <br />
      <input
        className="accent-green-500"
        type="radio"
        checked={wrongPass.greaterThan10}
        readOnly
      />
      <label htmlFor="text" className="pl-1.5 text-sm">
        10 characters
      </label>
    </div>
  );
};

export default Step1;
