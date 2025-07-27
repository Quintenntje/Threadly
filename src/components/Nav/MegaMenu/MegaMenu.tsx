interface MegaMenuProps {
  children: React.ReactNode;
  onMouseLeave: () => void;
}

const MegaMenu = ({ children, onMouseLeave }: MegaMenuProps) => {
  return (
    <div
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50"
    >
      {children}
    </div>
  );
};

export default MegaMenu;
