import React from 'react';
import Card from './Card';

class Display extends React.Component {
    render() {
        
        return (
            <div>
                {this.props.data.map((player) => (
                    <Card player={player} key={player.id} />
                ))}
            </div>
        )
    }
}

export default Display;