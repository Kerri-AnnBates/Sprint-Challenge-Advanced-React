import React from 'react';

class Card extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="div">
                <h2>{this.props.player.country}</h2>
                <p>{this.props.player.name}</p>
                <p>Searches: {this.props.player.searches}</p>
            </div>
        )
    }
}

export default Card;