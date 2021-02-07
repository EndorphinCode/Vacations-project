import React, { Component } from 'react';

class User extends Component {
    state = []
    render() { 
        const {item} = this.props
        return ( 
            <div>
                <div>User Name: {item.USER_NAME}</div>
                <div>Name: {item.NAME}</div>
                <div>Last Name : {item.LAST_NAME}</div>
                <br />
            </div>
         );
    }
}
 
export default User;