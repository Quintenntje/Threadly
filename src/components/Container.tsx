interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  isSection?: boolean;
}

const Container = ({ children, className, isSection }: ContainerProps) => {
  const baseClasses = "max-w-9xl mx-auto p-4";
  const combinedClasses = className
    ? `${baseClasses} ${className}`
    : baseClasses;

  if (isSection) {
    return <section className={combinedClasses}>{children}</section>;
  }

  return <div className={combinedClasses}>{children}</div>;
};

export default Container;
