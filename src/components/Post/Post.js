import React, { Component } from 'react';
import Nav from '../Nav/Nav';

class Post extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: '' 
        }
    }
    render() {
        return(
            <div>
                <h1>This is Auth Post</h1>
                <Nav/>
            </div>
        )
    }
}

export default Post;