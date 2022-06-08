import Doho from "./components/Doho";
import BonHaeng from "./components/BonHaeng";
import ByeongHeon from "./components/ByeongHeon";
import JunSeong from "./components/JunSeong";

function App(): JSX.Element {
  return (
    <div className="App">
      <Doho />
      <BonHaeng />
      <ByeongHeon />
      <JunSeong />
    </div>
  );
}

export default App;
