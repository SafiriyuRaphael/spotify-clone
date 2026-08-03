import { useContext } from "react";
import { authContext } from "../../context";
 
const Step3 = () => {
  const { registerData, setRegisterData } = useContext(authContext);
  return (
    <div className="flex flex-col gap-5">
      <div>
        <label className="flex gap-3  cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-5 accent-green-500"
            onClick={(e) => {
              setRegisterData({
                ...registerData,
                marketingMessage: !registerData.marketingMessage,
              });
            }}
            checked={registerData.marketingMessage}
          />
          <p>I would prefer not to receive messages from spotify</p>
        </label>
      </div>
      <div className="">
        <label className="flex gap-3  cursor-pointer ">
          <input
            type="checkbox"
            className="w-7 h-5 accent-green-500"
            onClick={(e) => {
              setRegisterData({
                ...registerData,
                shareData: !registerData.shareData,
              });
            }}
            checked={registerData.shareData}
          />
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
  );
};

export default Step3;
