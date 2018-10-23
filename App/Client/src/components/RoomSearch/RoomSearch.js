import React, { Component } from 'react';
import API from '../../utils/API.js'
class RoomSearch extends Component {
    handleBtn = (event) => {
        event.preventDefault();
        API.getRooms().then(function (response) {
            console.log(response)
        })
    }
    render() {
        return (<div>
            <h1>I dont have a joke for this one -_-</h1>
            <h2>Employee Only</h2>
            <h4>RoomSearch</h4>
            <button onClick={this.handleBtn}></button>
        </div>)
    }
}

export default RoomSearch