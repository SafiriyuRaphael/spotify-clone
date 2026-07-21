import { useContext } from "react";
import { authContext } from "../../context";

const Step2 = () => {
  const { registerData, setRegisterData } = useContext(authContext);

  return (
    <div className="flex flex-col gap-5">
      <div className="gap-2">
        <h1 className="font-bold">Name</h1>
        <p className="text-gray-500">This name will appear in your profile</p>
        <input
          className="border-2 w-full py-1.5"
          type="text"
          onChange={(e) =>
            setRegisterData({ ...registerData, fullName: e.target.value })
          }
          value={registerData.fullName}
        />
      </div>

      <div>
        <h1 className="font-bold">Date of Birth</h1>
        <p className="text-gray-500">
          Why do we need your date of birth?{" "}
          <a href="">
            {" "}
            <u>Learn more</u>
          </a>{" "}
        </p>

        <div className="flex gap-2 pt-4">
          <div className="flex self-center ">
            <input
              type="number"
              placeholder="dd"
              className="border-2 w-15 px-2 py-3 font-bold "
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  dob: { ...registerData.dob, day: e.target.value },
                })
              }
              value={registerData.dob.day}
            />
          </div>

          <div className="flex self-center">
            <select
              className="bg-black border-2 w-40 px-4 py-3 font-bold"
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  dob: { ...registerData.dob, month: e.target.value },
                })
              }
            >
              <option value="Jan">January</option>
              <option value="Feb">Febuary</option>
              <option value="Mar">March</option>
              <option value="Apr">April</option>
              <option value="May">May</option>
              <option value="Jun">June</option>
              <option value="Jul">July</option>
              <option value="Aug">August</option>
              <option value="Sept">September</option>
              <option value="Oct">October</option>
              <option value="Nov">November</option>
              <option value="Dec">December</option>
            </select>
          </div>

          <div className="flex self-center">
            <input
              type="number"
              placeholder="yyy"
              className="border-2 w-23 px-2 py-3 font-bold"
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  dob: { ...registerData.dob, year: e.target.value },
                })
              }
              value={registerData.dob.year}
            />
          </div>
        </div>
        <div className="mt-7">
          <h1 className="font-bold">Gender</h1>
          <p className="text-gray-500 text-s">
            We use your to help personalise our content recommendation and ads
            for you{" "}
          </p>
          <div className="flex gap-5">
            <input
              type="radio"
              name="gender"
              className="accent-green-500"
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  gender: "male",
                })
              }
              checked={registerData.gender === "male"}
            />
            <label className="" htmlFor="Male">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              className="accent-green-500"
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  gender: "female",
                })
              }
              checked={registerData.gender === "female"}
            />
            <label htmlFor="Female">Female</label>
          </div>

          <div className="flex     gap-5">
            <input
              type="radio"
              name="gender"
              className="accent-green-500"
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  gender: "prefer_not_to_say",
                })
              }
              checked={registerData.gender === "prefer_not_to_say"}
            />
            <label htmlFor="others">Rather not say</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
