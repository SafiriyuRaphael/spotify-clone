import React, { createContext, useState, type Dispatch } from "react";

type RegisterDataType = {
  password: string;
  fullName: string;
  Dob: string;
  gender: "male" | "female" | null;
  marketingMessage: boolean;
  shareData: boolean;
};

type AuthContextType = {
  registerData: {
    password: string;
    fullName: string;
    Dob: string;
    gender: "male" | "female" | null;
    marketingMessage: boolean;
    shareData: boolean;
  };
  setRegisterData: Dispatch<
    React.SetStateAction<{
      password: string;
      fullName: string;
      Dob: string;
      gender: null;
      marketingMessage: boolean;
      shareData: boolean;
    }>
  >;
};

export const authContext = createContext<AuthContextType>({
  registerData: {
    password: "",
    fullName: "",
    Dob: "",
    gender: null,
    marketingMessage: false,
    shareData: false,
  },
  setRegisterData: () => {},
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [registerData, setRegisterData] = useState<RegisterDataType>({
    password: "",
    fullName: "",
    Dob: "",
    gender: null,
    marketingMessage: false,
    shareData: false,
  });

  return (
    <authContext.Provider value={{ registerData, setRegisterData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
