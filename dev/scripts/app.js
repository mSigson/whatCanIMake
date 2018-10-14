import React from 'react';
import ReactDOM from 'react-dom';
import { 
	BrowserRouter as Router, 
	Route, BrowserHistory } from 'react-router-dom';

import Home from '../scripts/components/Home';

class App extends React.Component { 
    render() {
      return (
        <Router history={BrowserHistory}>
            <div className='app'>
                <header>
                    <h3>What Can I Make?</h3>
                </header>
                <Route exact path="/" component={Home} />
            </div>
        </Router>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));