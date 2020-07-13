import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import App from '../App'
import Edit from './Edit'

const Router = ()=>(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact />
        <Route path="/Edit/:id" component={Edit} />
    </Switch>
    </BrowserRouter>
)

export default Router