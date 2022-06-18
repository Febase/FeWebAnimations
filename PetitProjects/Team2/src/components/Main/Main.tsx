interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Main;
