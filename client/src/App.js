import React, { Component } from 'react';
import axios from 'axios'; 
import TripForm from "./components/TripForm";
import TripList from "./components/TripList"; 

class App extends Component {
  state = { 
    trips: [],
    locations: [], 
  };

  componentDidMount() {
    axios.get('/api/trips')
    .then( res => {
      this.setState({ trips: res.data})
    })
  } 

  showTrip = (id) => {
    axios.get(`/api/trips/${id}/locations`)
    .then( res => {
      this.setState({ locations: res.data })
    })
  }

  addTrip = (name) => {
    let trip = { name }
    axios.post('/api/trips', trip )
      .then(res => {
        this.setState({ trips: [res.data, ...this.state.trips]})
      })
  }

  updateTrip = (id, name) => {
    let trip = { name }
    axios.put(`/api/trips/${id}`, trip)
      .then( res => {
        let trips = this.state.trips.map( t => {
          if (t.id === id)
            return res.data 
          return t 
        })
        this.setState({trips})
      })
  }

  deleteTrip = (id) => {
    fetch(`/api/trips/${id}`, { method: 'DELETE' })
      .then(() => {
        const { trips } = this.state;
        this.setState({ trips: trips.filter(t => t.id !== id) })
      })
  }

  addLocation = (location) => {

  }

  updateLocation = (location) => {

  }

  deleteLocation = (id) => {

  }

  render() {
    return (
      <div className="container">
        <TripForm addTrip={this.addTrip} />
        <TripList 
          trips={this.state.trips}
          locations={this.state.locations}
          updateTrip={this.updateTrip}
          deleteTrip={this.deleteTrip}
          showTrip={this.showTrip}
          deleteLocation={this.deleteLocation}
        />
      </div>
    )
  }
}

export default App;
