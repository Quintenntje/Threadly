interface MegeMenuColProps {
  children: React.ReactNode;
  title: string;
}

const MegeMenuCol = ({ children, title }: MegeMenuColProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <ul className="flex flex-col gap-4">{children}</ul>
    </div>
  );
};

export default MegeMenuCol;
