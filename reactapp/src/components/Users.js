import React, { Component } from 'react';
import '../assets/css/App.css';

// IMPORT COMPONENTS
import UsersTable from './UsersTable';
import UsersForm from './UsersForm';

class Users extends Component {

    render() {
        return (
            <React.Fragment>

                {/* SECTION TITLE */}
                <div className="sectionHeader">
                    USERS
                </div>

                <br></br>
                <br></br>
                <br></br>

                {/* ADD NEW USER */}
                <UsersForm />

                <br></br>
                <br></br>
                <br></br>

                {/* DATA TABLE */}
                <UsersTable />

            </React.Fragment >
            
            

        );
    }

}

export default Users;