

const Button = ({ label }: {label: string}) => {
  return (
    <button className="bg-green-500 rounded-full w-full py-2.5 font-bold text-black cursor-pointer transition-all duration-200 hover:scale-110">
      {label}
    </button>
  );
};

export default Button;
