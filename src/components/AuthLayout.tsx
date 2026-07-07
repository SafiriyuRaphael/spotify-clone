import { BiPhone } from "react-icons/bi";
import { FaAppStore, FaFacebook, FaGoogle, FaSpotify } from "react-icons/fa";
import { Link, useLocation } from "react-router";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isSignUpPage = location.pathname.includes("/signup");
  const otherMethods = [
    { icon: BiPhone, name: "Continue with phone number" },
    { icon: FaGoogle, name: "Continue with Google" },
    { icon: FaFacebook, name: "Continue with Facebook" },
    { icon: FaAppStore, name: "Continue with App Store" },
  ];
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center gap-5 py-10 min-h-screen">
      <FaSpotify size={50} color="green" />
      {children}
      <p>or</p>
      <div className="flex flex-col gap-2.5">
        {otherMethods.map((method) => (
          <div
            role="button"
            tabIndex={0}
            key={method.name}
            className="flex gap-5 border-2 border-gray-600 px-4 py-3 rounded-full items-center  cursor-pointer hover:border-white transition-all duration-200 hover:scale-110"
          >
            <method.icon size={20} /> <p>{method.name}</p>
          </div>
        ))}
      </div>

      <div className="text-center space-y-2 py-3">
        <p className="text-gray-300">
          {isSignUpPage ? "Already have an account?" : "Don't have an account?"}
        </p>
        {isSignUpPage ? (
          <Link to="/auth/login" className="font-bold">
            <p>Log in</p>
          </Link>
        ) : (
          <Link to="/auth/signup" className="font-bold">
            <p>Sign up</p>
          </Link>
        )}
      </div>

      <p className="text-gray-400 text-xs text-center w-xs">
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>
    </div>
  );
};

export default AuthLayout;
