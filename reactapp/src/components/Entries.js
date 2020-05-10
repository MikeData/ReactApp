import React, { Component } from 'react';
import '../assets/css/App.css';

// IMPORT COMPONENTS
import EntriesTable from './EntriesTable';

class Entries extends Component {

    render() {
        return (
            
            <React.Fragment>

                {/* SECTION TITLE */}
                <div className="sectionHeader">
                    ENTRIES
                </div>

                <br></br>
                <br></br>
                <br></br>

                {/* ADD NEW ENTRY */}
                <form action="/entries" method="POST">
                    <label className="input" htmlFor="user"> User </label>
                    <input className="input" type="text" name="user" placeholder="User" />
                    <label className="input" htmlFor="amount"> Amount </label>
                    <input className="input" type="number" step="0.00000001" min="0" name="amount" placeholder="Amount" />
                    <input className="input-sendbutton" type="submit" />
                </form>

                <br></br>
                <br></br>
                <br></br>

                {/* DATA TABLE */}
                <EntriesTable />
                
            </React.Fragment >
            

        );
    }

}

export default Entries;