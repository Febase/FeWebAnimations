interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <p>Main</p>
      <div>{children}</div>
    </div>
  );
};

export default Main;
