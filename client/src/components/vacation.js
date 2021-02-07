import React, { Component } from 'react';

class Vacation extends Component {
    state = {  }
    render() { 
        const {item} = this.props
        return ( 
            <div>
                <div>Description: {item.DESCRIPTION}</div>
                <div>Destination : {item.DESTINATION}</div>
                <div> {item.PIC}</div>
                {/* pic here ^ */}
                <div>Start Date: {item.date_start} End Date: {item.date_end}</div>
                <div>Price : {item.price}</div>
                <div>Followers : {item.followers}</div>
                <br />
            </div>
         );
    }
}
 
export default Vacation;