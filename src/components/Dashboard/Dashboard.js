import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { connect } from 'react-redux';
import axios from 'axios';
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      search: "",
      userposts: true,
    };
  }

  componentDidMount() {
    this.getPosts();
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
      const {search, userposts} = this.state
      let posts = this.state.posts.map(element => {
        return(
          <div key={element.id}
               onClick={() => this.props.history.push(`/posts/${element.id}`)}
               >
            <div className="content-posts">
              <h3>{element.title}</h3>
              <p>User: {element.username}</p>
            </div>
            
          </div>
        )
      })
    return (
      <div>
        <div className="dashboard-search-container">
          <div className="search-box">
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
          <button className="reset-button-dash" onClick={this.reset}>Reset</button>
          <input
            type="checkbox"
            name="userposts"
            id="userposts"
            checked={userposts}
            onChange={this.handleCheckbox}
          />
          <p>My Posts:</p>
          </div>
          {posts}
        </div>
        <Nav />
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps)(Dashboard);
