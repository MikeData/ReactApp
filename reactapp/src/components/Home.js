import React, { Component } from 'react';
import '../assets/css/App.css';
import logo from '../assets/images/logo.svg';

class Home extends Component {

    render() {
        return (

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>
                        Welcome to the CIC Manager
                    </h2>
                </header>
            </div>

        );
    }

}

export default Home;