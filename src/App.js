import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  
  

  const memoCalculate = useMemo(
    () =>
      function () {
        const validRegex = new RegExp(/^[0-9\b]+$/);
        if (validRegex.test(text)) {
          return true;
        }
        return false;
      },
    [text]
  );
  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <span className="icon is-small is-right">
          <i className={`${memoCalculate ? "fas fa-check" : "fas fa-times"}`} />
        </span>
      </div>
    </div>
  );
}

export default App;
