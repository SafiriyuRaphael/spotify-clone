import { Outlet } from "react-router";

const Homepage = () => {
  return (
    <section className="bg-[#121212] rounded-lg flex flex-col m-2">
      <div className="  text-white flex justify-between p-2 ">
        <h1 className="font-bold">TRENDING SONGS </h1>
        <p>show all </p>
      </div>
      <div>
        <img src="/images/ayra.jpg" alt="" className="w-48 h-48" />
        <p>ayra</p>
      </div>
    </section>
  );
};

export default Homepage;
