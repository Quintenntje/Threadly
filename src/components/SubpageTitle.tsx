import Container from "./Container";

const SubpageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="flex items-center justify-center">
      <h1 className="text-4xl font-bold my-6">{children}</h1>
    </Container>
  );
};

export default SubpageTitle;
