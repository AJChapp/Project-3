import React, { Component } from 'react';
import API from '../../utils/API.js'
import Calendar from 'react-calendar';
import './RoomSearch.js'
class RoomSearch extends Component {
    state = {
        date: new Date(),
    }

    componentDidMount() {
    }

    // https://gist.github.com/miguelmota/7905510
    getDates = function (startDate, endDate) {
        let dates = [],
            currentDate = startDate,
            addDays = function (days) {
                let date = new Date(this.valueOf());
                date.setDate(date.getDate() + days);
                return date;
            };
        while (currentDate <= endDate) {
            dates.push(currentDate);
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    };
    //   changed vars to const and let
    //   end of extra code

    handleBtn = (event) => {
        event.preventDefault();
        const newDate = new Date(this.state.date[0])
        console.log(newDate.setDate(+1));
        console.log(new Date(this.state.date[0]))

    }

    dateManager = (date) => {
        this.setState((state,props)=>({
            date
        }))
        
        this.grabBetweenDays()
    }

    grabBetweenDays = () => {
        let endDate = new Date (this.state.date[1])
        // endDate.setDate(endDate.getDate() + 1)
        let allDatesBooked = this.getDates(this.state.date[0], endDate)
        console.log(allDatesBooked)
    }

    render() {

        return (<div>
            <h4>RoomSearch</h4>
            <Calendar selectRange={true} minDate={new Date()} onChange={this.dateManager} value={this.state.date} />
            <button onClick={this.handleBtn}>no function</button>
        </div>)
    }
}

export default RoomSearch