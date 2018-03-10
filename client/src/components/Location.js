import React from 'react';


class Location extends React.Component {

  state = {
    editing: false,
    
  }


  render() {

    return(
      <div>
        <div 
          className="collection-item light-blue-text"
        >{this.props.city} - {this.props.state}
          <button 
            className="btn "
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


export default Location