import Doho from "./components/Doho";
import BonHaeng from "./components/BonHaeng";
import ByeongHeon from "./components/ByeongHeon";
import JunSung from "./components/JunSung";

function App(): JSX.Element {
  return (
    <div className="App">
      <BonHaeng />
      <JunSung />
      <Doho />
      <ByeongHeon />
    </div>
  );
}

export default App;
