import React, { Component } from 'react';
import User from './user'

class Users extends Component {
    state = { users: [], }

    componentDidMount() {
        this.fetchUsers();
    }
    
    async fetchUsers() {
        try {
            const response = await fetch('/api/users')
            const result = await response.json()
            this.setState({ users:result })
            console.log (result)
        } catch (err){
            alert(err)
        }
    }

    render() { 
        return ( 
            <div>
                {this.state.users.map(u => 
                    <User item = {u} />
                    )}
            </div>
         );
    }
}
 
export default Users;