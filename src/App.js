import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState('');
  const [check,setCheck] = useState(false);
  const calculate = (text) => {
    const validRegex = new RegExp('^([0-9])');

    if(validRegex.test(text)){
      setCheck(true)
    } else {
      setCheck(false);
    }

    }

  
  

  const memoCalculate = useMemo(() => calculate(text),[text]
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
          
          <i className={`${check ? "fas fa-check" : "fas fa-times"}`} />
        </span>
      </div>
    </div>
  );
}

export default App;
