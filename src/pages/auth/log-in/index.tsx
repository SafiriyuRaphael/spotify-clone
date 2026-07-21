import { useState } from "react";
import AuthLayout from "../../../components/AuthLayout";
import Button from "../../../components/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (!loginData.email || !loginData.password) {
      toast("No email or password", { type: "error" });
      return;
    }

    if (auth?.password !== loginData.password) {
      toast("Wrong password", { type: "error" });
      return;
    }
    if (auth?.email !== loginData.email) {
      toast("Wrong email", { type: "error" });
      return;
    }
    navigate("/dashboard");
  };
  return (
    <AuthLayout>
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-5xl font-bold">Welcome back</h1>
        <label htmlFor="mail" className="self-start font-bold text-lg">
          Email
        </label>
        <input
          type="text"
          id="mail"
          placeholder="name@domain.com"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          className="border w-full pl-2 py-3"
        />
        <label htmlFor="mail" className="self-start font-bold text-lg">
          Password
        </label>
        <input
          type="password"
          id="mail"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          placeholder="name@domain.com"
          className="border w-full pl-2 py-3"
        />
        <Button label="Continue" onClick={submit} />
      </div>
    </AuthLayout>
  );
};

export default Login;
