import React from 'react'
import Location from './Location'


class Trip extends React.Component {
  state = {
    editing: false,
    name: this.props.name,
    show: false,
    city: '',
    state: '',
  }

  showLocations = () => {
    this.props.showTrip(this.props.id) 
    this.setState({ show: true, showing_id: 0 })
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateTrip, id} = this.props
    updateTrip( id, this.state.name)
    this.setState({editing: false })
  }

  handleSubmitLocation = (e) => {
    e.preventDefault();
    let location = {
      city: this.state.city,
      state: this.state.state,
      trip_id: this.props.id 
    }
    this.props.addLocation(location)
    this.setState({ city: '', state: '' })
  }

  render() {
    const { 
      updateLocation, 
      deleteLocation, 
      addLocation 
    } = this.props;
    const locationProps = { 
      updateLocation, 
      deleteLocation, 
      addLocation 
    }

    if (this.state.editing) {
      // EDIT TRIP
      return (
        <div className="col s12 m6">
          <div className="card blue grey">
            <div className="card-content white-text">
              <span className="card-title white-text">Editing</span>
                <form 
                  onSubmit={this.handleSubmit}
                >
                <input 
                  value={this.state.name}
                  onChange={this.handleChange}
                  name="name"
                  type="text"
                />
                </form>
            </div> 
            <div className="card-action white">
              <button 
                className="btn light-blue"
                onClick={() => this.setState({ editing: false })}
              >Cancel
              </button>
            </div>
          </div> 
        </div>
      )
    } else {
      return (
        <div className="col s12 m6">
          <div className="card blue grey">
            <div className="card-content white-text">
              <span 
                className="card-title white-text center"
              >{
                this.props.name.charAt(0).toUpperCase() + 
                this.props.name.slice(1)}
              </span>
              { this.state.show ? 
              
              // ADD LOCATION FORM 
              <div>
                <form onSubmit={this.handleSubmitLocation}>
                  <input 
                    value={this.state.city}
                    onChange={this.handleChange}
                    name="city"
                    type="text"
                    placeholder="Add City"
                  />
                   <input 
                    value={this.state.state}
                    onChange={this.handleChange}
                    name="state"
                    type="text"
                    placeholder="Add State"
                  />
                  <button
                    style={{ margin: '10px' }}
                    className="btn light-blue"
                    type="submit"
                  >Add
                  </button>
                </form>
            //LIST EACH LOCATION 
                <ul className="collection">
                  { this.props.locations.map( l => 
                    <Location 
                      key={l.id} 
                      {...l} 
                      {...locationProps} 
                    />
                  )} 
                </ul>
              </div>
                :
                <div></div>
              }
            </div>

            <div className="card-action white">
              <button
                onClick={this.showLocations}
                style={{ margin: '10px' }}
                className="btn light-blue"
              >Locations
              </button>
              <button 
                onClick={() => this.setState({ editing: true })}
                style={{margin: '10px'}} 
                className="btn light-blue"
              >Edit
              </button>
              <button 
                onClick={() => 
                  this.props.deleteTrip(this.props.id)
                }
                className="btn light-blue"
              >Delete
              </button>
            </div>
          </div>
        </div>
      )
    }
  }
}


export default Trip; 