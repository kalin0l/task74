import { useState, useMemo, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState('0');
  // const [validate,setValidate] = useState(false);

  const calculate = (sometext) => {
    const validRegex = new RegExp(/[1-9]/);
    
    if(validRegex.test(sometext) && sometext < 15){
      // setValidate(true);
      return true;
    } else {
      // setValidate(false);
      return false;
    }
  };
  const onChange = (e) => {
    setText(e.target.value);
    // setValidate(calculate(e.target.value));
  }

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
          onChange={onChange}
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
