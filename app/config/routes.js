import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../components/main';
import Home from '../views/home';
import About from '../views/about';

const Routes = (
    <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
        </Route>
    </Router>
);

export default Routes;
