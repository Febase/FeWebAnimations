import Doho from "./components/Doho";
import BonHaeng from "./components/BonHaeng";
import Byounghern from "./components/Byounghern/Byounghern";
import JunSung from "./components/JunSung";

function App(): JSX.Element {
  return (
    <div className="App">
      <BonHaeng />
      <JunSung />
      <Doho />
      <Byounghern />
    </div>
  );
}

export default App;
