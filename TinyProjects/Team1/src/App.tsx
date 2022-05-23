import { styled } from "style/theme";
import Buttons from "components/buttons/Buttons";
import { globalStyles } from "style/globalStyles";

function App() {
  globalStyles();

  return (
    <div className="App">
      <Test>123</Test>
      <Buttons />
    </div>
  );
}

export default App;

const Test = styled("div", { fontSize: "$3" });
