import React from "react";

const MusicRow = ({
  artist,
  img,
  isExplicit,
  title,
  variant = "square",
}: {
  title?: string;
  img: string;
  artist: string;
  isExplicit?: boolean;
  variant?: "circle" | "square";
}) => {
  return (
    <div className="px-5 mt-3 text-white ">
      <img
        className={`size-[10vw]  cursor-pointer hover:scale-105 duration-200 ${variant === "circle" ? "rounded-[50%]" : "rounded-[5px]"}`}
        src={img}
        alt=""
      />
      <h2>{title}</h2>
      <p className="text-[12px] cursor-pointer hover:scale-105 duration-200">
        {isExplicit && <span className="bg-[azure] px-1 text-black ">E</span>}{" "}
        {artist}
      </p>
    </div>
  );
};

export default MusicRow;
