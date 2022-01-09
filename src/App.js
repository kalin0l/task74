import { useState, useMemo, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState('');
  // const [validate,setValidate] = useState(false);

  const calculate = (text) => {
    const validRegex = new RegExp(/[1-9]/);
    
    if(validRegex.test(text) && text < 10){
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
    console.log(memoCalculate,text.length);
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
          <i className={`${memoCalculate ? "fa-check" : "fas fa-times"}`} />
        </span>
      </div>
    </div>
  );
}

export default App;
