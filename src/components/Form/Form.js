import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class Form extends Component {
constructor() {
    super();

    this.state = {
        title: '',
        img: '',
        content: ''
    }
}
    render() {
        return(
            <div>
                <h1>This is Auth Form</h1>
                <Nav />
            </div>
        )
    }
}

export default Form;