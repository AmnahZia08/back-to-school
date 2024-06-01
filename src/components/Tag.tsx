type Props = {
  children: string;
};

const Tag: React.FC<Props> = ({ children }) => {
  return (
    <p className="absolute max-w-[80%] rounded-l-full font-bold bg-white uppercase text-primary py-4 px-6 border-2 border-primary border-r-white shadow-lg mb-8">
      {children}
    </p>
  );
};

export default Tag;
