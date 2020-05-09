import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';

class Menu extends Component {

    render() {
        return (
            <header id="header">
                <div className="sidenav">
                    {/* LOGO */}
                    <div id="logo">
                        <img src={logo} className="App-logo-menu" alt="logo" />

                    </div>

                    {/* MENU */}
                    <nav id="menu">
                        <ul>
                                <a href="/" target="_self">Home</a>
                                <a href="/dashboard" target="_self">Dashboard</a>
                                <a href="/users" target="_self">Users</a>
                                <a href="/entries" target="_self">Entries</a>
                                <a href="/vaults" target="_self">Vaults</a>
                                <a href="/markets" target="_self">Markets</a>
                                <a href="/trades" target="_self">Trades</a>
                                <a href="/setup" target="_self">Setup</a>
                        </ul>
                    </nav>
                </div>
            </header>

        );
    }

}

export default Menu;