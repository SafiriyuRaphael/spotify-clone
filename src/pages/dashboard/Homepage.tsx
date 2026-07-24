import { BsPlus } from "react-icons/bs";
import { LuGlobe } from "react-icons/lu";

const Homepage = () => {
  return (
    <div>
      <section className="w-[25%] bg-[#121212] rounded-lg flex flex-col h-screen ">
        <div className="flex justify-between p-3 items-center">
          <h2 className="text-white font-bold text-lg">Your Library</h2>

          <button className=" flex items-center text-white font-bold text-lg">
            <BsPlus />
            Create
          </button>
        </div>

        <div className=" bg-[#242424] rounded-lg p-4 mt-4 ml-2 mr-2 ">
          <h3 className="font-semibold text-white">
            Create yourfirst playlist
          </h3>

          <p className="text-gray-300 mt-2 text-sm font-bold ">
            it's easy, we'll help you
          </p>

          <button className="bg-white text-black rounded-full font-semibold px-4 py-2 mt-5 hover:scale-105 duration-200 ">
            Create playlist
          </button>
        </div>
        <div className="bg-[#242424] rounded-lg p-4 mt-4 ml-2 mr-2">
          <h3 className="font-semibold text-white">
            Let's find some podcast to follow
          </h3>

          <p className="text-gray-300 mt-2 text-sm font-bold">
            We'll keep you updated on new episodes
          </p>
          <button className="bg-white text-black rounded-full font-semibold px-4 py-2 mt-5 hover:scale-105 duration-200">
            Browse Podcast
          </button>
        </div>

        <div className="mt-6 text-xs text-gray-400 flex flex-wrap gap-3 p-4   ">
          <span className="hover:text-white cursor-pointer">Legal</span>
          <span className="hover:text-white cursor-pointer">
            Safety & Privacy Center
          </span>
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">Cookie</span>
          <span className="hover:text-white cursor-pointer">AboutAds</span>
          <span className="hover:text-white cursor-pointer">Accessibility</span>
          <span className=" text-white cursor-pointer hover:underline">
            Cookie
          </span>
        </div>
        <div>
          <button className=" flex items-center px-4 py-2 ml-4 mt-3 bg-#121212 border-2 border-amber-50 rounded-full">
            <LuGlobe className="text-2xs text-white" />{" "}
            <p className="text-2xs text-white">English</p>
          </button>
        </div>
      </section>

      <section className="flex-1"></section>
    </div>
  );
};

export default Homepage;
