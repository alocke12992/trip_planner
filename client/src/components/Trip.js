import React from 'react'



class Trip extends React.Component {
  state = {
    editing: false,
    name: this.props.name,
    show: false,
  }

  showLocations = () => {
    this.props.showTrip(this.props.id) 
    this.setState({ show: true })
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

  render() {
    if (this.state.editing) {
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
              >Cancel</button>
            </div>
          </div> 
        </div>
      )
    } else {
      return (
        <div className="col s12 m6">
          <div className="card blue grey">
            <div className="card-content white-text">
              <span className="card-title white-text">{this.props.name}</span>
              { this.state.show ? 
                <ul className="collection">
                  { this.props.locations.map( l => 
                    <li className="collection-item light-blue-text" key={l.id}>{l.city} - {l.state} </li>
                  )} 
                </ul>
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