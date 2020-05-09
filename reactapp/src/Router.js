import React from 'react';
import { Component } from "react";
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom';

class Router extends Component{

    render(){
        return (
            
            <BrowserRouter>
            
                {/* CONFIG ROUTES AND PAGES */}
                <Switch>
                    <Route path="" component=""/>


                </Switch>

            </BrowserRouter>

        )
    }
}

export default Router;