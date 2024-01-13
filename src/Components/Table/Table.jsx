import React, { PureComponent } from 'react';
import Element from './Element';
import './Table.css';
import { getRandomInt } from '../../utils/utils';

export default class Table extends PureComponent {
    state = {
        borderWidth: '0px',
        ...this.props,
    }

    componentDidMount() { 

        const activeUppdate = setInterval(() => {
            const indexActive = getRandomInt(0, this.props.animals.length);
            this.setState((actualState) => (
                {
                    animals: actualState.animals.map((item, index) => {
                        return (index === indexActive ? {...item, active: 'active'} : item)
                    })
                }), () => {
                    let activeAnimals = this.state.animals.filter((item) => item.active)

                    if (activeAnimals.length > Math.floor(this.props.animals.length/2)) {
                        this.setState ({
                            borderWidth: '10px'
                        })
                    }

                    if (activeAnimals.length === this.props.animals.length) {
                        clearInterval(activeUppdate);
                        this.setState ({
                            borderWidth: '20px'
                        }
                        
                        )
                    }
                }
                
            )
        }, 2000)
    } 

  render() {
    let { animals=[], borderWidth } = this.state
    let styles = {
        border: 'solid rgba(0, 0, 0)',
        borderWidth,
    }
    return (animals.length ? (
      <table style={ styles } >
        <tbody>
            {animals.map((item, index) => {
                return <tr className={item.active} key={index}>
                    <Element key={index} animal={item}/>
                </tr>
            })}
        </tbody>
      </table>) : null
    )
  }
}
