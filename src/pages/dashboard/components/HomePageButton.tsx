const HomePageButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black rounded-full font-semibold px-4 py-2  hover:scale-105 duration-200 "
    >
      {label}
    </button>
  );
};

export default HomePageButton;
