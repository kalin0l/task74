import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(0);
  
  

  const memoCalculate = useMemo(
    () =>
      function (e) {
        setText(e.target.value)
        if (text < 5) {
          return true;
        } else {

          return false;
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
          
          <i className={`${text < 5 ? "fas fa-check" : "fas fa-times"}`} />
        </span>
      </div>
    </div>
  );
}

export default App;
