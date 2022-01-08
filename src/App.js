import { useState, useMemo, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  // const [check, setCheck] = useState(false);

  const calculate = useCallback((text) => {
    const validRegex = new RegExp(/[2-9]/);
    console.log(text);
    console.log("factorialOf(n) called!");
    if(validRegex.test(text) && text < 10){
      return text <= 0 ? 1 : text;
    } 
    // if (validRegex.test(+text) && +text < 10) {
    //   setCheck(true);
    // } else {
    //   setCheck(false);
    // }
  },[]);

  const memoCalculate = useMemo(() => calculate(text), [calculate,text]);
  useEffect(() => {
    console.log(memoCalculate);
    // console.log(check);
  }, [memoCalculate]);
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
