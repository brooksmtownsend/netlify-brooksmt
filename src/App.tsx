import React from 'react';
import './App.css';
import AssemblyScript from "./AssemblyScript"

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to my React playground!
        </p>
      <AssemblyScript/>
      </header>
    </div>
  );
}

export default App;
