import React from "react";
import { BiDownload, BiHome, BiSearch } from "react-icons/bi";
import { BsPlus, BsSpotify } from "react-icons/bs";
import { CgEnter } from "react-icons/cg";
import { Outlet } from "react-router";
import HomePageButton from "./components/HomePageButton";
import { LuGlobe } from "react-icons/lu";

const DashboardLayout = () => {
  return (
    <div className="bg-black">
      <header className="py-4  text-white flex gap-3.5 items-center justify-between px-3.5">
        <BsSpotify size={32} />
        <div className="bg-[#333333] p-2 rounded-full">
          <BiHome size={28} />
        </div>
        <div className="flex items-center border-gray-300 border px-3 gap-2 py-2 rounded-full bg-[#333333] min-w-md justify-between">
          <div className="flex items-center gap-2.5">
            <BiSearch size={32} />
            <input
              type="text"
              placeholder="What do you want to play"
              className="w-full"
            />
          </div>
          <div className="flex items-center gap-2.5">
            <span>|</span>
            <CgEnter size={28} />
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <p>Premium</p>
          <p>Support</p>
          <p>Download</p>
        </div>

        <span>|</span>
        <div className="flex gap-3 items-center">
          <BiDownload size={32} />
          <p>Install App</p>
        </div>
        <p>Sign Up</p>
        <HomePageButton label="Log in" onClick={() => {}} />
      </header>

      <div className="flex">
        <section className="w-[30%] bg-[#121212] rounded-lg flex flex-col  p-4 ">
          <div className="flex justify-between  items-center">
            <h2 className="text-white font-bold text-lg">Your Library</h2>

            <button className=" flex items-center text-white font-bold text-lg">
              <BsPlus />
              Create
            </button>
          </div>
          <div className="space-y-4 mt-4">
            <div className=" bg-[#242424] rounded-lg p-4 space-y-3 ">
              <h3 className="font-semibold text-white">
                Create yourfirst playlist
              </h3>

              <p className="text-gray-300  text-sm font-bold ">
                it's easy, we'll help you
              </p>

              <HomePageButton label="Create playlist" onClick={() => {}} />
            </div>
            <div className="bg-[#242424] rounded-lg p-4 space-y-3">
              <h3 className="font-semibold text-white">
                Let's find some podcast to follow
              </h3>

              <p className="text-gray-300 mt-2 text-sm font-bold">
                We'll keep you updated on new episodes
              </p>
              <HomePageButton label="Browse Podcast" onClick={() => {}} />
            </div>
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
            <span className="hover:text-white cursor-pointer">
              Accessibility
            </span>
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
        <div className="fex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
