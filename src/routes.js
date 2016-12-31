import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/App/App';
import Home from './containers/Home/Home';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
    </Route>
);