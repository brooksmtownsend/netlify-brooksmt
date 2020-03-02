import React, {useState} from 'react';
import './AssemblyScript.css';
import api from "./wasm/as/api.js"

function AssemblyScript() {
    const [value, setValue] = useState(5);
    const [result, setResult] = useState();
    const [wasm, setWasm] = useState();

    (async () => setWasm(await api))()

    return (
      <div className="AssemblyScript">
        <h3>This section utilizes WebAssembly to compute a factorial</h3>
        <p>
          The factorial of 
          <input value={value} onChange={evt => setValue(Number.parseFloat(evt.target.value))} type="number" min="0" />
           is {result}
        </p>
        <button onClick={wasm === undefined ? () => setResult("idk") : () => setResult(wasm.factorial(value))}>
          Calculate
        </button>
      </div>
    );
}

export default AssemblyScript;