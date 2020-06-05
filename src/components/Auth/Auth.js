import React, { Component } from "react";
// import Nav from '../Nav/Nav';
import axios from 'axios';

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

  register = (event) => {
    event.preventDefault();
    const {username, password} = this.state
    axios.post('/auth/register', {username, password})
    .then( res => {
      this.props.loginUser(res.data)
      this.props.history.push('/dashboard')
    })
    .catch(error => {
        alert(error, 'Could not log in')
    })
}


login = (event) => {
  event.preventDefault();
  const {username, password} = this.state
  axios.post('/auth/login', {username, password})
  .then( res => {
    this.props.loginUser(res.data)
    this.props.history.push('/dashboard')
  })
  .catch(error => {
      alert('Could not log in')
  })
}

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

          <input onSubmit={(event) => this.login(event)} type="submit" value="Login" />
          <input onSubmit={(event) => this.register(event)} type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default Auth;
