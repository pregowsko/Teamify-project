import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Error from './pages/Error';

import './styles/App.scss';

//komponent zawierający routing

const App = () => {

    return (
        <Router>
            <div className='container'>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/profile" component={Profile} />
                    <Route path="*" component={Error} />   
                </Switch>
            </div>
        </Router>    
    );
};

export default App;