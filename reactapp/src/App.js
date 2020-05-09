import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Import components
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">

      <Menu />
      <div className="center">
        <section className="content">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>
              Welcome to the CIC Manager
            </h2>
          </header>
        </section>
      </div>


    </div>
  );
}

export default App;
