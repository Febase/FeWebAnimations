import Doho from "./components/Doho";
import BonHaeng from "./components/BonHaeng";
import Byounghern from "./components/Byounghern/Byounghern";
import JunSeong from "./components/JunSeong";

function App(): JSX.Element {
  return (
    <div className="App">
      <BonHaeng />
      <JunSeong />
      <Doho />
      <Byounghern />
    </div>
  );
}

export default App;
