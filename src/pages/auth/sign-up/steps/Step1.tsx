import { useContext, useState, type ChangeEvent } from "react";
import { FaEye } from "react-icons/fa";
import { authContext } from "../../context";

const Step1 = () => {
  const { registerData, setRegisterData } = useContext(authContext);
  const [wrongPass, setWrongPass] = useState({
    hasLetter: "no",
    hasChars: "no",
    greaterThan10: "no",
  });

  let letters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let specialChars = [",", ".", "@"];

  const authenticatePassword = (pass: string) => {
    if (pass.length >= 10) {
      setWrongPass({ ...wrongPass, greaterThan10: "yes" });
    }
    if (letters.includes(pass)) {
      setWrongPass({ ...wrongPass, hasLetter: "yes" });
    }
    if (specialChars.includes(pass)) {
      setWrongPass({ ...wrongPass, hasChars: "yes" });
    }
  };

  const writePassword = (text: string) => {
    console.log(text);

    setRegisterData({ password: text });
    console.log(registerData.password);

    authenticatePassword(registerData.password);
    console.log(wrongPass);
  };

  return (
    <div className="space-y-2">
      <label htmlFor="password" className="flex flex-col font-bold ">
        Password
      </label>

      <div className="border flex justify-between w-4xs h-10 px-2">
        <input
          type="password"
          className=""
          onChange={(e: ChangeEvent) => writePassword(e.target.value)}
        />
        <FaEye className="pr-1.5 size-8" />
      </div>
      <p className="font-bold">Your password must contain at least </p>
      <input type="radio" value={wrongPass.hasLetter} />
      <label htmlFor="text" className="pl-1.5 text-sm">
        1 letter
      </label>
      <br />
      <input type="radio" value={wrongPass.hasChars} />
      <label htmlFor="text" className="pl-1.5 text-sm">
        1 number or special character example:#?!$
      </label>
      <br />
      <input type="radio" value={wrongPass.greaterThan10} />
      <label htmlFor="text" className="pl-1.5 text-sm">
        10 characters
      </label>
    </div>
  );
};

export default Step1;
