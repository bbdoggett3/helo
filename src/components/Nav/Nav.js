import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Nav.css";
import axios from "axios";
import { logOutUser } from '../../ducks/reducer';

function Nav(props) {
  const { push } = props.history;
  if (props.location.pathname === "/") {
    return null;
  }

  const logout = () => {
    axios.delete("/auth/logout").then(() => {
      console.log(props)
      props.logOutUser();
      props.history.push("/");
    });
  };

  return (
    <div>
      <nav className="navbar-container">
        <img
          className="profile-pic"
          src="https://robohash.org/Harry"
          alt="profile of a person"
        ></img>
        <h3>{props.username}</h3>
        <Link to="/dashboard">
          <span>
            <img
              className="icon-pic"
              src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fhome%20button.png?v=1591411136554"
              alt="house icon"
            />
          </span>
        </Link>
        <Link to="/new">
          <span>
            <img
              className="icon-pic"
              src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fnew%20file%20folder.png?v=1591412181828"
              alt="new post icon"
            />
          </span>
        </Link>
        <Link to="/">
          <span onClick={() => logout()}>
            <img
              className="logout-btn"
              src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Flogout%20button.png?v=1591412517415"
              alt="logout button"
            />
          </span>
        </Link>
      </nav>
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState;
// const mapDispatchToProps = {logOutUser}

export default connect(mapStateToProps, {logOutUser})(withRouter(Nav));
