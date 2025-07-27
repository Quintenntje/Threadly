interface ByGenderProps {
  children: React.ReactNode;
  IsActive: boolean;
  onClick: () => void;
}
const ByGender = ({ children, IsActive, onClick }: ByGenderProps) => {
  return (
    <button
      onClick={onClick}
      className={` bg-none outline-none w-full text-lg font-medium pb-2 hover:text-gray-500 ${
        IsActive ? "border-b-2 border-black" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default ByGender;
