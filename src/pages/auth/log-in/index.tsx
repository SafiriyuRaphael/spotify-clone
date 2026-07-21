import AuthLayout from "../../../components/AuthLayout";
import Button from "../../../components/Button";

const Login = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-5xl font-bold">Welcome back</h1>
        <label htmlFor="mail">Email</label>
        <input
          type="text"
          id="mail"
          placeholder="name@domain.com"
          className="border w-full rounded-full pl-4 py-2"
        />
        <Button label="Continue" />
      </div>
    </AuthLayout>
  );
};

export default Login;
