import { useState, useMemo, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [check, setCheck] = useState(false);

  const calculate = (text) => {
    const validRegex = new RegExp(/[1-9]/);
    console.log(text);

    if (validRegex.test(+text) > 0 && +text < 10) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const memoCalculate = useMemo(() => calculate(text), [text]);
  useEffect(() => {
    console.log(memoCalculate);
    console.log(check);
  }, [memoCalculate, check]);
  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={(e) => setText(Number(e.target.value))}
          value={text}
        />
        <span className="icon is-small is-right">
          {memoCalculate}
          <i className={`${check ? "fas fa-check" : "fas fa-times"}`} />
        </span>
      </div>
    </div>
  );
}

export default App;
