import React, { PureComponent } from 'react'
import Element from './Element'

export default class Table extends PureComponent {
    state = {
        className:'',
        borderWidht: '0px',
        ...this.props,
    }

    componentDidMount() { 

        this.setState((actualState) => {
            actualState.array.map((item) => {
                return item.isActive = false;
            })
        })

        function get_random (list) {
            const randomItem = list[Math.round((Math.random()*list.length))];
            return randomItem.isActive = true;
        }

        const selectItem = setInterval(() => {

            this.setState((actualState) => get_random(actualState.array), () => {
                const newArr = this.state.array.filter((item)=> {
                    return item === true;
                })
    
                
                if (newArr.length === Math.round(this.props.array.length/2)) {
                    this.setState({
                        borderWidht:'10px'
                    })
                }

                if(newArr.length === this.props.array.length){
                    clearInterval(selectItem);
                    this.setState({
                        borderWidht:'20px'
                    })
                }
            
            })
        }, 2000);
      
        
     }

  render() {
    let { array=[], className, borderWidht } = this.state

    
    return (array.length ? (
      <table style={ {border: ' solid rgba(0, 0, 0)', borderWidth: borderWidht } } >
        <tbody>
            {array.map((item, index) => {
                return <tr className={className} key={index}>
                    {Object.keys(item).map((key, index) => (
                        <Element key={index} element={item[key]}/>))}
                </tr>
            })}
        </tbody>
      </table>) : null
    )
  }
}
