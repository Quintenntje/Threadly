interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="sm:text-5xl text-2xl font-bold font-serif mb-4">
      {children}
    </h2>
  );
};

export default SectionTitle;
