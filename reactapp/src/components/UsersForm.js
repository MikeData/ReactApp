import React, { Component } from 'react';
import '../assets/css/App.css';
import axios from 'axios';

class UsersFrom extends Component {


    aliasRef = React.createRef();

    // DEFINE OBJECTS
    state = {
        alias: '',
        status: null
    };

    changeState = () => {
        this.setState({
            alias: this.aliasRef.current.value
        })
    }

    saveUser = (e) => {
        e.preventDefault();

        // LOAD STATE WITH FORM DATA
        this.changeState();

        // POST REQUEST
        axios.post("http://localhost:3001/users", this.state.alias)
             

        alert("Added new user");
       
    }
    

    render () {
        return (

            <form onSubmit={this.saveUser}>
                    <label className="input" htmlFor="alias"> Add New User </label>
                    <input className="input" type="text" name="alias" placeholder="User Name" ref={this.aliasRef}/>
                    <input className="input-sendbutton" type="submit" />
            </form>
        );



    }

}

export default UsersFrom;