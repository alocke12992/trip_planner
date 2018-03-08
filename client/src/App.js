import React, { Component } from 'react';
import axios from 'axios'; 
import TripForm from "./components/TripForm";
import TripList from "./components/TripList"; 

class App extends Component {
  state = { trips: [] };

  componentDidMount() {
    //TODO make a call to our rails server to get Items
  }

  addTrip = (name) => {
    let trip = { name }
    axios.post('/api/trips', trip )
      .then(res => {
        console.log(res)
      })
  }

  updateTrip = (id) => {
    //TODO make api call to update todo
    //TODO update state
  }

  deleteTodo = (id) => {
    //TODO make api call to delete todo
    //TODO remove it from state
  }

  render() {
    return (
      <div className="container">
        <TripForm addTrip={this.addTrip} />
        <TripList 
          trips={this.state.trips}
          updateTrip={this.updateTrip}
          deleteTrip={this.deleteTrip}
        />
      </div>
    )
  }
}

export default App;
