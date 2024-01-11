import React, { Component } from 'react'
import Element from './Element'

export default class Table extends Component {
    state = {
        color: 'red',
        borderWidht: '0px',
        ...this.props,
    }

    componentDidMount() { 
        // console.log(this.state);
        setInterval(() => {
            this.setState( 
                this.state.array.map((item) => {
                    return (item.active = 'active');
                })
            , () => {
                console.log(this.state)
            }
            )
        }, 2000);

        // this.setState((actualState) => {
        //     actualState.array.map((item) => {
        //         return item.isActive = 'active';
        //     })
        // }, () => {
        //     console.log(this.state);
        // })

        // setInterval(() => {
        //     this.setState({
        //         color:'green'
        //     })
        // }, 2000);



        // const number = (list) => {
        //     return list[Math.round((Math.random()*list.length))];
        // }



        // const selectItem = setInterval(() => {

        //     this.setState((actualState) => () => {
        //         const newArr = this.state.array.filter((item)=> {
        //             return item === true;
        //         })
    
                
        //         if (newArr.length === Math.round(this.props.array.length/2)) {
        //             this.setState({
        //                 borderWidht:'10px'
        //             })
        //         }

        //         if(newArr.length === this.props.array.length){
        //             clearInterval(selectItem);
        //             this.setState({
        //                 borderWidht:'20px'
        //             })
        //         }
            
        //     })
        // }, 2000);
      
        
     }

  render() {
    let { array=[], borderWidht } = this.state

    
    return (array.length ? (
      <table style={ {border: ' solid rgba(0, 0, 0)', borderWidth: borderWidht } } >
        <tbody>
            {array.map((item, index) => {
                console.log(item)
                return <tr className={item.active} key={index}>
                    <Element key={index} animal={item}/>
                </tr>
            })}
        </tbody>
      </table>) : null
    )
  }
}
