import React, { Component } from "react";
import Nav from "../Nav/Nav";

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

export default Dashboard;
