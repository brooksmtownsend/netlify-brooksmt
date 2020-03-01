import React, {useState} from 'react';
import './AssemblyScript.css';
import api from "./wasm/as/api.js"

function AssemblyScript() {
    const [value, setValue] = useState(5);
    const [result, setResult] = useState();

    (async () => console.log('sup') && console.log(await api))()
  
    return (
      <div className="AssemblyScript">
        <p>
          The factorial of 
          <input value={value} onChange={evt => setValue(Number.parseFloat(evt.target.value))} />
           is {result}
        </p>
        <button onClick={async () => setResult((await api).factorial(value))}>
          Calculate
        </button>
      </div>
    );
}

export default AssemblyScript;