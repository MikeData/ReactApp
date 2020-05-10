import React from 'react';
import './assets/css/App.css';

// Import components
import Router from './Router';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">

      <Menu />
      <div className="center">

        <Router />
        <section className="content">
          
        </section>
      </div>


    </div>
  );
}

export default App;
