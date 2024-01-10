import React, { PureComponent } from 'react'
import Element from './Element'

export default class Table extends PureComponent {

    state = {
        ...this.props,
        border: '1px, solid, black'
    }

  render() {
    let { array=[], border } = this.state
    let styles = {
        color: 'green',
        border: '1px, solid, black'
    }
    
    return (array.length ? (
      <table style={ styles }>
        <tbody>
            {array.map((item, index) => {
                return <tr style={ styles } key={index}>
                    {Object.keys(item).map((key, index) => (
                        <Element key={index} element={item[key]}/>))}
                </tr>
            })}
        </tbody>
      </table>) : null
    )
  }
}
