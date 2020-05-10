import React, {Component} from 'react';
import axios from 'axios';
import '../assets/css/App.css';

class EntriesTable extends Component{

    // DEFINE OBJECTS
    state = {
        entries: [],
        status: null
    };


    // LOAD BEFORE RENDER
    componentDidMount(){
        this.getEntries();
    }

    getEntries = () => {
        axios.get("http://localhost:3001/entries/list")
             .then( res => {
                this.setState({
                    entries: res.data,
                    status: 'success'
                });
                console.log(this.state.entries);
             });
    }

    renderTableData() {
        return this.state.entries.map((entry, index) => {
           const { id, user, amount } = entry //destructuring
           return (
              <tr key={index}>
                 <td>{id}</td>
                 <td>{user}</td>
                 <td>{amount}</td>
                 <td>TODAY</td>
              </tr>
           )
        })
    }
    
    render (){
        return (
            <React.Fragment>
                <div id="Test2">
                    <h1> Entries Table </h1>
                </div>

                {/* DATA TABLE */}
                <table className="dataTable" id="entriesTable" border="1"  align="center">
                    <thead id="entriesColumnData">
                        <tr>
                            <th>Id</th>
                            <th>User</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>   
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                                        
                </table>

            
            </React.Fragment>
            
        )
        
    }
    
}

export default EntriesTable;