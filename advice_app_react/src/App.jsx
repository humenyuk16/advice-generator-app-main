import { useState } from "react";
import Footer from "./components/Footer";
import "./App.css";
import svg from "../public/icon-dice.svg";
import patter_desc from "./assets/pattern_desc.svg";
function App() {
  const [Advice, setAdvise] = useState("");
  const [AdviseID, setAdviseID] = useState(null);

  const fetchAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvise(data.slip.advice);
    setAdviseID(data.slip.id);
  };

  return (
    <div className="App">
      <div className="Advice-container">
        <div className="header">
          <p>
            Advice <span>#{AdviseID}</span>
          </p>
        </div>
        <div className="card">
          <p>“{Advice}”</p>
          <div>
            <img className="patter_devider" src={patter_desc} alt="divider" />
            <button onClick={fetchAdvice}>
              <img className="dice" src={svg} alt="dice" />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
