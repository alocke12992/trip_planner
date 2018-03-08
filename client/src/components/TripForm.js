import React from "react";

class TripForm extends React.Component {
  state = { name: "" }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    this.props.addTrip(this.state.name);
    this.setState({ name: ''})
  }

  render() {
    return (
      <div className="row">
        <form 
          className="col s12"
          onSubmit={this.handleChange}
        >
          <div className="row">
            <div className="input-field col s12">
              <input 
                placeholder="Add Trip Name" 
                id="name" 
                name="name" 
                type="text" 
                className="validate"
              />
              <label for="name"></label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default TripForm 