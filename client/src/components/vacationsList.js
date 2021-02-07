import React, { Component } from 'react';
import Vacation from './vacation'

class VacationsList extends Component {
    state = { 
        vacations: [],
     }

     componentDidMount() {
        this.fetcVacations();
    }
    
    async fetcVacations() {
        try {
            const response = await fetch('/api/vacations')
            const result = await response.json()
            this.setState({ vacations: result })
            console.log (result)
        } catch (err){
            alert (err)
        }
    }

    render() { 
        return ( 
            <div>
                Vacations list
                {this.state.vacations.map(vac => 
                    <Vacation item = {vac} />
                    )}
            </div>
         );
    }
}
 
export default VacationsList;