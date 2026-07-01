import React from "react";

const Button = ({ label }) => {
  return (
    <button className="bg-green-500 rounded-full w-full py-2.5 font-bold text-black">
      {label}
    </button>
  );
};

export default Button;
