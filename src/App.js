import { useState, useMemo, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(0);
  // const [check, setCheck] = useState(false);

  const calculate = useCallback((text) => {
    const validRegex = new RegExp(/[1-9]/);
    
    if(validRegex.test(text) && text < 10){
      return text < 1 ? 1 : text;
    } 
    // if (validRegex.test(+text) && +text < 10) {
    //   setCheck(true);
    // } else {
    //   setCheck(false);
    // }
  },[]);

  const memoCalculate = useMemo(() => calculate(text), [text]);
  useEffect(() => {
    console.log(memoCalculate,text);
  }, [memoCalculate,text]);
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
