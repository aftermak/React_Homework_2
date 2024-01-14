import React, { PureComponent } from 'react';
import Element from './Element';
import './Table.css';
import { getRandomInt } from '../../utils/utils';

export default class Table extends PureComponent {
    state = {
        borderWidth: '0px',
        index: [],
        indexActive: null,
        ...this.props,
    }

    componentDidMount() {

        this.setState({
            indexActive: getRandomInt(0, this.props.animals.length)
        })

        const activeUppdate = setInterval(() => {
            this.setState((actualState) => (
                {
                    animals: actualState.animals.map((item, index) => {
                        return (index === this.state.indexActive ? { ...item, active: 'active' } : item)
                    }),
                }), () => {
                    this.setState((actualState) => ({
                        index: [...actualState.index, actualState.indexActive]
                    }))

                    let activeAnimals = this.state.animals.filter((item) => item.active);
                    if (activeAnimals.length > Math.floor(this.props.animals.length / 2)) {
                        this.setState({
                            borderWidth: '10px'
                        })
                    }
                    if (activeAnimals.length === this.props.animals.length) {
                        clearInterval(activeUppdate);
                        this.setState({
                            borderWidth: '20px'
                        })
                    }
                }
            )
        }, 2000)
    }

    componentDidUpdate () {
        
        this.setState((actualState) => (
            actualState.index.includes(actualState.indexActive) ? 
            {indexActive: getRandomInt(0, this.props.animals.length)}
            : null)
        )
    }

    render() {
        let { animals = [], borderWidth } = this.state
        let styles = {
            border: 'solid black',
            borderWidth,
        }
        return (animals.length ? (
            <table style={styles} >
                <tbody>
                    {animals.map((item, index) => {
                        return <tr className={item.active} key={index}>
                            <Element key={index} animal={item} />
                        </tr>
                    })}
                </tbody>
            </table>) : null
        )
    }
}
