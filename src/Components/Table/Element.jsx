import React, { Component } from 'react'

export default class Element extends Component {


  render() {
    let { animal } = this.props
    return <>
      <td>{animal.type}</td>
      <td>{animal.icon}</td>
    </>
      
    
  }
}
