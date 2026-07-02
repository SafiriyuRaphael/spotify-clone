type Props = {
  label: string;
  onClick?: () => void;
};

const Button = ({ label, onClick }: Props) => {
  return (
    <button
      className="bg-green-500 rounded-full w-full py-2.5 font-bold text-black"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
