const Step2 = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="gap-2">
        <h1 className="text-bold">Name</h1>
        <p className="text-gray-500">This name will appear in your profile</p>
        <input className="border w-full py-1.5" type="text" />
      </div>

      <div>
        <h1 className="text-bold">Date of Birth</h1>
        <p className="text-gray-500">
          Why do we need your date of birth?{" "}
          <a href="">
            {" "}
            <u>Learn more</u>
          </a>{" "}
        </p>

        <div className="flex justify-between pt-4">
          <div className="flex self-center ">
            <input type="number" placeholder="dd" className="border-1 w-20" />
          </div>

          <div className="flex self-center">
            <select className="bg-black border-1">
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
            <input type="number" placeholder="yyy" className="border-1 w-25" />
          </div>
        </div>
        <div className="mt-7">
          <h1 className="text-bold">Gender</h1>
          <p className="text-gray-500 text-s">
            We use your to help personalise our content recommendation and ads
            for you{" "}
          </p>
          <div className="flex gap-5">
            <input type="radio" />
            <label className="" htmlFor="Male">
              Male
            </label>
            <input type="radio" />
            <label htmlFor="Female">Female</label>
          </div>

          <div className="flex     gap-5">
            <input type="radio" />
            <label htmlFor="others">Rather not say</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
