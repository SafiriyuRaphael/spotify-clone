import React, { createContext, useState, type Dispatch } from "react";

export type RegisterDataType = {
  email: string;
  password: string;
  fullName: string;
  dob: { day: string; month: string; year: string };
  gender: "male" | "female" | "prefer_not_to_say";
  marketingMessage: boolean;
  shareData: boolean;
};

type WrongPassType = {
  hasLetter: boolean;
  hasChars: boolean;
  greaterThan10: boolean;
};

type AuthContextType = {
  registerData: RegisterDataType;
  wrongPass: WrongPassType;
  setRegisterData: Dispatch<React.SetStateAction<RegisterDataType>>;
  setWrongPass: Dispatch<React.SetStateAction<WrongPassType>>;
};

export const authContext = createContext<AuthContextType>({
  registerData: {
    email: "",
    password: "",
    fullName: "",
    dob: { day: "", month: "", year: "" },
    gender: "prefer_not_to_say",
    marketingMessage: false,
    shareData: false,
  },
  wrongPass: {
    hasLetter: false,
    hasChars: false,
    greaterThan10: false,
  },
  setRegisterData: () => {},
  setWrongPass: () => {},
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [registerData, setRegisterData] = useState<RegisterDataType>({
    email: "",
    password: "",
    fullName: "",
    dob: { day: "", month: "", year: "" },
    gender: "prefer_not_to_say",
    marketingMessage: false,
    shareData: false,
  });
  const [wrongPass, setWrongPass] = useState({
    hasLetter: false,
    hasChars: false,
    greaterThan10: false,
  });

  return (
    <authContext.Provider
      value={{ registerData, setRegisterData, wrongPass, setWrongPass }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
