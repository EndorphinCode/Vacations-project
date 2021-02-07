import React, { Component } from 'react';

class Register extends Component {
    constructor (props) {
        super(props)
        this.userName = React.createRef()
        this.name = React.createRef()
        this.lastName = React.createRef()
        this.password = React.createRef()
        this.userState = []
    }
    
    createUser() {
        const user = {userName: this.userName.current.value, name: this.name.current.value, lastName: this.lastName.current.value, password: this.password.current.value}
        this.userState.push(user)
        console.log(this.userState) 
        this.sqlReg(user.userName, user.name, user.lastName, user.password)
    }

    async sqlReg(USER_NAME, NAME, LAST_NAME, PASSWORD){
            await fetch('/api/reg', {
                method: "POST",
                body: JSON.stringify({
                    USER_NAME,
                    NAME,
                    LAST_NAME,
                    PASSWORD
                }),
                headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                } 
            })

    }



    render() { 
        return ( 
            <div>
                Register Form
                <br />
                <input type = 'text' ref = {this.userName} placeholder = 'User Name'></input>
                <br />
                <input type = 'text' ref = {this.name} placeholder = 'Name'></input>
                <br />
                <input type = 'text' ref= {this.lastName} placeholder = 'Last Name'></input>
                <br />
                <input type = 'text' ref= {this.password} placeholder = 'Password'></input>
                <br />
                <button onClick = {()=>this.createUser()}>SUBMIT</button>
                <hr />
            </div>
            
         );
    }
}


export default Register;