import React, { Component } from 'react'

export default class List extends Component {

    constructor(props) {
        super(props);
        setTimeout(() => {
            this.setState({
                list: [...this.state.list, 'tiger'],
                color: 'green'
            }, ()=>{console.log(this.state)})
        },1000)


    }

    state = {
        color: 'red',
        ...this.props,
    }
    
  render() {
    let { list=[], color } = this.state
        
    return list.length ? (
        
        <ul>
            {list.map((item, index) => (
                <li key={index} style={ {color:color} }>{item}</li>
            ))}
        </ul>) 
        : null
    
  }
}

