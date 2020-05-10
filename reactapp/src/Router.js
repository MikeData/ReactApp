import React from 'react';
import { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// IMPORT COMPONENTS
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Entries from './components/Entries';
import Vaults from './components/Vaults';
import Error from './components/Error';
import UsersTable from './components/UsersTable';

// IMPORT HELPERS


class Router extends Component{
   
    render(){

        return (
            
            <BrowserRouter>
            
                {/* CONFIG ROUTES AND PAGES */}
                <Switch>
                    {/* WEB ROUTES */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/entries" component={Entries} />
                    <Route exact path="/vaults" component={Vaults} />

                    {/* DATA HOSTING */}
                    <Route exact path="/users/list" render={() => (
                        
                        <UsersTable />
                                                                    
                    ) } />
                    <Route exact path="/entries/list" render={() => (
                        
                        <UsersTable />
                    ) } />
                    
                    {/* DEFAULT ERROR MESSAGE */}
                    <Route component={Error} />

                </Switch>

            </BrowserRouter>

        );
    }
}

export default Router;