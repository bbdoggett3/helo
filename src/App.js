import React, { Component } from "react";
import "./App.css";
import routes from './routes';


class App extends Component {
  constructor() {
    super()

    this.state = {
      user: ""
    }

  }
  
  render() {
 
    return (
      <div className="App">
          {routes}
      </div>
    );
  }
}

export default App;
