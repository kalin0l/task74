import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  
  

  const memoCalculate = useMemo(
    () =>
      function (e) {
        const validRegex = new RegExp('^[0-9]');
        setText(e.target.value)
        if (!validRegex.test(text)) {
          return false;
        } else {

          return true;
        }
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
          onChange={memoCalculate}
          value={text}
        />
        <span className="icon is-small is-right">
          
          <i className={`${text ? "fas fa-check" : "fas fa-times"}`} />
        </span>
      </div>
    </div>
  );
}

export default App;
