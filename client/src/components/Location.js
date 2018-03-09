import React from 'react';

class Location extends React.Component {

  state = {
    editing: false 
  }


  render() {
    
    return(
      <li 
        className="collection-item light-blue-text"
      >{this.props.city} - {this.props.state}
      <button 
        className="btn"
        style={{
          margin:'5px',
          height: '20px', 
          width: '20px',
        }}
        ><i className="material-icons center">mode_edit</i></button>
      <button 
        className="btn"
        onClick={() => this.props.deleteLocation(this.props.trip_id, this.props.id)}
        style={{
          margin: '5px',
          fontSize: '10px',
          height: '20px',
          width: '20px',
          align: 'center',
        }}
      >X</button>
      </li>

    )
  }

}


export default Location