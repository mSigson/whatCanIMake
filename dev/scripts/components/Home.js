import React from 'react';
import ReactDOM from 'react-dom';
import { 
	BrowserRouter as Router, 
	Route, Link, NavLink } from 'react-router-dom';

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
      return (
        <div className="wrapper">
           <h1>Welcome!</h1>
           <h2>'What Can I Make?' is a fun application anyone can use to figure what to make with the ingredients already in your fridge!</h2>
           <Link to="/search">Let's Go!</Link>
        </div>
      )
    }
}

Home.contextTypes = {
    router: React.PropTypes.shape({
        history: React.PropTypes.object.isRequired,
    }),
}; 

export default Home;