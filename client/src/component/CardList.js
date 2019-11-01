import React, { Component } from 'react'
import axios from 'axios';
import Display from './Display';
import Header from './Header';

export default class CardList extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            darkMode: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
            .then(res => {
                console.log(res);
                // Set data.
                this.setState({
                    data: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className="card-list">
                <Header />
                <button onClick={this.props.toggleDarkMode} data-testid="toggleDarkMode">Dark mode</button>
                <Display data={this.state.data} data-testid="display-data" />
            </div>
        )
    }
}
