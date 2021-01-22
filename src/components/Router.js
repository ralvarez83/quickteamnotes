import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import TeamPicker from './TeamPicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={TeamPicker} />
            <Route exact path="/team/:teamId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;