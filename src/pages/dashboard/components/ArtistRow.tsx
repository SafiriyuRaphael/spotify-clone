import React from "react";

const ArtistRow = ({
  name,
  images,
  isExplicit,
  variant = "square",
}: {
  name?: string;
  images: any[];
  isExplicit?: boolean;
  variant?: "circle" | "square";
}) => {
  return (
    <div className="px-5 mt-3 text-center text-white ">
      <img
        className={`size-36  cursor-pointer hover:scale-105 duration-200 ${variant === "circle" ? "rounded-[50%]" : "rounded-[5px]"}`}
        src={images[0]?.url}
        alt=""
      />
      <h2>{name}</h2>
      <p className="text-[12px] cursor-pointer hover:scale-105 duration-200">
        {isExplicit && <span className="bg-[azure] px-1 text-black ">E</span>}{" "}
        artist
      </p>
    </div>
  );
};

export default ArtistRow;
