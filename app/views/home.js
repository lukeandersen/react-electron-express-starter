import React, { Component } from 'react';
import Api from '../helpers/api';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Bob' };
        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        // Do something when loaded
    }

    handleInput(e) {
        this.setState({ name: e.target.value });
    }

    handleSearch(e) {
        e.preventDefault();
        this.setState({ name: e.target.value });
        Api.getThing().then(data => {
            console.log(data);
        });
    }

    render() {
        const { name } = this.state;

        return (
            <div className="container text-center">
                <h2>Name: {name}</h2>

                <form className="search" onSubmit={this.handleSearch}>
                    <input onChange={this.handleInput} type="search" placeholder="Search" />
                    <button type="submit" className="btn">Search</button>
                </form>

                <div className="bg-test" />
                <img src="assets/apple-icon.png" width="100" alt="Black box" />
            </div>
        );
    }
}

export default Home;
