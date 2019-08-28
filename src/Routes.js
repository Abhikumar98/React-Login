import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { App } from './components/App';
import User from './components/User';

const routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/user" component={User} />
            </Switch>
        </Router>
    )
}

// temporarily removed 

export default routes;