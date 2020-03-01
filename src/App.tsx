import React from 'react';
import './App.css';
import AssemblyScript from "./AssemblyScript"

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a React app bootstrapped with create-react-app and built with Netlify!
        </p>
        <p> Welcome to the site!</p>
      <AssemblyScript/>
      </header>
    </div>
  );
}

export default App;
