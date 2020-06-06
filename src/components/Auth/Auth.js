import React, { Component } from "react";
// import Nav from '../Nav/Nav';
import axios from "axios";
import "./Auth.css";
import { connect } from 'react-redux';
import { loginUser} from '../../ducks/reducer';

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  //     componentDidMount(){
  //         this.checkBrowserLocation();
  //     }

  //   checkBrowserLocation = () => {
  //     if (this.props.location.pathname === '/') {
  //       return;
  //     } else {
  //       return {routes};
  //     }
  //   };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  register = () => {
    const { username, password } = this.state;
    axios
      .post("/auth/register", { username, password })
      .then((res) => {
        this.props.loginUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        alert(error, "Could not log in");
      });
  };

  login = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    axios
      .post("/auth/login", { username, password })
      .then((res) => {
        console.log(res.data)
        this.props.loginUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        alert("Could not log in");
      });
  };

  render() {
    const { username, password } = this.state;
    console.log(this.props.history)
    return (
      <div className="auth-container">
        <form className="form-container" onSubmit={this.login}>
          <img src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fsmile%20face.png?v=1591393051733" alt="site logo"/>
          <h1>Helo</h1>
          <div className= "auth-info">
            User:
            <input
              className="auth-input-box"
              type="text"
              name="username"
              value={username}
              onChange={(event) => this.changeHandler(event)}
            />
            Pasword:
            <input
              className="auth-input-box"
              type="password"
              name="password"
              value={password}
              onChange={(event) => this.changeHandler(event)}
            />
          </div>

          <input className="login-register-btn"
            // onSubmit={(event) => this.login(event)}
            type="submit"
            value="Submit"
          />
          <input className="login-register-btn"
            // onSubmit={(event) => this.register(event)}
            type="button" 
            onClick={() => this.register() }
            value="Register"
          />
        </form>
      </div>
    );
  }
}

const mapToStateProps = reduxState => reduxState

export default connect(mapToStateProps, {loginUser})(Auth);
