import React, {Component} from 'react';
import axios from 'axios';
import '../assets/css/App.css';

class UsersTable extends Component{

    // DEFINE OBJECTS
    state = {
        users: [],
        status: null
    };


    // LOAD BEFORE RENDER
    componentDidMount(){
        this.getUsers();
    }

    getUsers = () => {
        axios.get("http://localhost:3001/users/list")
             .then( res => {
                this.setState({
                    users: res.data,
                    status: 'success'
                });
                console.log(this.state.users);
             });
    }

    renderTableData() {
        return this.state.users.map((user, index) => {
           const { id, alias, totalAmount, hodlAmount, tradeAmount } = user //destructuring
           return (
              <tr key={index}>
                 <td>{id}</td>
                 <td>{alias}</td>
                 <td>{totalAmount}</td>
                 <td>{hodlAmount}</td>
                 <td>{tradeAmount}</td>
                 <td>TODAY</td>
              </tr>
           )
        })
    }
    
    render (){
        return (
            <React.Fragment>
                <div id="Test">
                    <h1> Users Table </h1>
                </div>

                {/* DATA TABLE */}
                <table className="dataTable" id="usersTable" border="1"  align="center">
                    <thead id="usersColumnData">
                        <tr>
                            <th>Id</th>
                            <th>User</th>
                            <th>Total Amount</th>
                            <th>Hodl Amount</th>
                            <th>Trade Amount</th>
                            <th>Created Date</th>
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

export default UsersTable;