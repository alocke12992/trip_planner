import React from 'react'


class Trip extends React.Component {

  render() {
    return (
      <div className="col s12 m6">
        <div className="card blue lighten-1">
          <div className="card-content black-text">
            <span className="card-title">{this.props.name}</span>
            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            <span></span>
            <span>Second Link</span>
          </div>
        </div>
      </div>
    )
  }

}


export default Trip; 