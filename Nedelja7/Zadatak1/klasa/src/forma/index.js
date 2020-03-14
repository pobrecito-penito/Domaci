import React from 'react'

class Forma extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <input type="text"></input>
                <input type="button" value={this.props.string}></input>
            </form>
        )
    }

}

export default Forma