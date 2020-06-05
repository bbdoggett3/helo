import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';

function Nav(props) {

    return (
        
      <div>
        <h1>This is Nav</h1>
        <nav>
            <span></span>
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/new'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
        </nav>
        
      </div>
    );

    

}

export default withRouter(Nav);
