import React from 'react';


export default class Text extends React.Component {

    componentDidMount() {
        console.log('DID MOUNT componente Texto -->', this.props.textoVariable);
    }
    render() {
        return (
            <h1>{this.props.textoVariable}</h1>
        )
    }

}