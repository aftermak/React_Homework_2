import React, { PureComponent } from 'react'

export default class Element extends PureComponent {

  render() {
    let { animal } = this.props
    return <>
      <td>{animal.type}</td>
      <td>{animal.icon}</td>
    </>
  }
}
