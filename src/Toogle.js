import React from 'react'


export default class Toogle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToogleOn: this.props.clockProp }


        // this.clickButton = this.clickButton.bind(this);

    }

    // clickButton = () => {
    clickButton () {
        this.setState({
            isToogleOn: !this.state.isToogleOn
        })
        this.props.showClock(!this.state.isToogleOn);
    }

    render() {
        return (
            <button onClick={(e) => this.clickButton(e)}>
                {this.state.isToogleOn ? 'OFF': 'ON'}
            </button>
        )
    }
}