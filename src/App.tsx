import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
	  This is a React app bootstrapped with create-react-app and built with Netlify!
        </p>
	<p> Welcome to the site!</p>
      </header>
    </div>
  );
}

export default App;
