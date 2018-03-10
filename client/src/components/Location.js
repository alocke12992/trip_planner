import React from 'react';


class Location extends React.Component {

  state = {
    editing: false,
    
  }

  handleChangeCity = (e) => {
    let { city, value } = e.target;
    this.setState({ [city]: value })
  }

  handleChangeState = (e) => {
    let { state, value } = e.target;
    this.setState({ [state]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const location = {city: this.state.city, state: this.state.state}
    const { updateLocation, id, trip_id } = this.props
    updateLocation(trip_id, id, location)
    debugger
    this.setState({ editing: false })
  }


  render() {
    if (this.state.editing) {
      return (
        <div>
          <div>Editing</div>
          <div>
            <form
              onSubmit={this.handleSubmit}
            >
              <input
                value={this.state.city}
                onChange={this.handleChangeCity}
                name="city"
                type="text"
                placeholder={this.props.city}
              />
              <input
                value={this.state.state}
                onChange={this.handleChangeState}
                name="state"
                type="text"
                placeholder={this.props.state}
              />
              <button
                className="btn"
                type="submit" 
                
              > Add 
              </button> 
            </form>
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <div 
            className="collection-item light-blue-text"
          >{this.props.city} - {this.props.state}
            <button 
              className="btn "
              onClick={() => this.setState({ editing: true })}  
              style={{
                margin:'5px',
                height: '20px', 
                width: '20px',
              }}
              ></button>
            <button 
              waves='light'
              className="btn red"
              onClick={() => this.props.deleteLocation(this.props.trip_id, this.props.id)}
              style={{
                margin: '5px',
                fontSize: '10px',
                height: '20px',
                width: '20px',
                align: 'center',
              }}
            ></button>
          </div>
        </div>
  
      )
    }
  }

}


export default Location