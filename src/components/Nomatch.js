

  import React, { Component } from 'react'
  
  export default class Nomatch extends Component {
    render() {
        const {location}=this.props;
      return (
        <div>
            <h3>
        No match for <code>{location.pathname}</code>
      </h3>
        </div>
      )
    }
  }
  