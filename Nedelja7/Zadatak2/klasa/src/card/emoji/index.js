import React from 'react'

class Emoji extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        
        return (
            <img src={this.props.src} alt="Smiley" />
        )

    }

}

export default Emoji