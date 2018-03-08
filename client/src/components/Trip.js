import React from 'react'



class Trip extends React.Component {
  state = {editing: false}

  render() {
    if (this.state.editing) {
      return (
        <div>
          <form>
            <input />
          </form>
          <button 
            className="btn light-blue"
            onClick={() => this.setState({ editing: false })}
          >Cancel</button>
        </div>
      )
    } else {
      return (

        <div className="col s12 m6">
          <div className="card blue grey">
            <div className="card-content white-text">
              <span className="card-title white-text">{this.props.name}</span>
              <p>Trip Details</p>
            </div>
            <div className="card-action white">
              <button 
                onClick={() => this.setState({ editing: true })}
                style={{margin: '10px'}} 
                className="btn light-blue"
              >Edit
              </button>
  
              <button 
                onClick={() => this.props.deleteTrip(this.props.id)}
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