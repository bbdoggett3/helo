import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }
    render() {
        return(
            <div>
                <h1>This is the Dashboard</h1>
                <Nav/>
            </div>
        )
    }
}

export default Dashboard;