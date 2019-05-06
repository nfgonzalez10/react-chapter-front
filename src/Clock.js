import React from 'react';
import Text from './Text';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }

    componentDidMount() {
        console.log('Se ejecuta Component DID MOUNT -->');
        
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log('se ejecuta WILL UNMOUNT');
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
            <div>
                <h2>Clock!!</h2>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
                <Text textoVariable="hola mundo"/>
            </div>
        )
    }
}