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
          fontSize: '10px',
          height: '20px', 
          width: '20px',
          align: 'center',
        }}
      >edit</button>
      <button 
        className="btn"
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