import React, { Component } from "react";
// import Nav from '../Nav/Nav';

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

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h1>This is Auth Component</h1>
        <form>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={(event) => this.changeHandler(event)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={(event) => this.changeHandler(event)}
          />

          <input type="submit" value="Login" />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default Auth;
