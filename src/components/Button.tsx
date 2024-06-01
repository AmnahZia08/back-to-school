type Props = {
  onClick: () => void;
  children: string;
  className?: string;
};

const Button: React.FC<Props> = ({
  onClick,
  children,
  className: customClass = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`font-bold bg-white uppercase text-primary py-4 px-6 border-2 border-primary rounded shadow-lg transform hover:translate-y-1 hover:scale-105 transition-transform duration-300 ${customClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
