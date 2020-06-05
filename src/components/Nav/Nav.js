import React from "react";
// import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css'

function Nav(props) {
  console.log(props)

    return (
      <div>
        <nav className = "navbar-container">
            <h3>Welcome back {props.username}</h3>
            <img src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fme.jpg?v=1569425179160" alt = "profile of a person"></img>
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/new'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
        </nav>
        
      </div>
    );

    

}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(Nav)
