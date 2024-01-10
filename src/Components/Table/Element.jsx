import React, { PureComponent } from 'react'

export default class Element extends PureComponent {


  render() {
    let { element } = this.props
    return (
      <td>{element}</td>
    )
  }
}
