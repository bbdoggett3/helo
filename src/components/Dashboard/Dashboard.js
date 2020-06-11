import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { connect } from 'react-redux';
import axios from 'axios';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      search: "",
      userposts: true,
    };
  }

  handleSearch = (event) => {
    this.setState({
        search: event.target.value
    })
  }

  handleCheckbox(event) {
      this.setState({
        userposts: event.target.checked
      })
  }

  reset() {
      this.setState({
          search: "",
          userposts: true
      })
  }

  getPosts = () => {
    const {search, userposts} = this.state

    axios.get(`/api/posts?userposts=${userposts}&search=${search}`)
    .then(res => {
      this.setState({posts: res.data})
    }).catch(error => console.log(error, "Cannot get posts"))
  }

  render() {
      const {search, userposts, posts} = this.state
    return (
      <div>
        <div className="dashboard-search-container">
          <input 
            className="search-bar" 
            placeholder="Search by title"
            name="search"
            value={search}
            onChange={this.handleSearch} 
          />
          <img
            id="search-pic"
            src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fsearch%20icon.png?v=1591583287681"
            alt="search icon"
            onClick={this.getPosts}
            
          />
          <button onClick={this.reset}>Reset</button>
          My Posts:
          <input
            type="checkbox"
            name="userposts"
            id="userposts"
            checked={userposts}
            onChange={this.handleCheckbox}
          />
          <Nav />
        </div>
 
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps)(Dashboard);
