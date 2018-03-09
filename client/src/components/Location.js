import React from 'react';
import { Button, Icon } from 'react-materialize'

class Location extends React.Component {

  state = {
    editing: false 
  }


  render() {
    
    return(
      <div>
        <div 
          className="collection-item light-blue-text"
        >{this.props.city} - {this.props.state}
          <button 
            className="btn"
            style={{
              margin:'5px',
              height: '20px', 
              width: '20px',
            }}
            ><Icon small>mode_edit</Icon></button>
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
        </div>
      </div>

    )
  }

}


export default Location