import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, browserHistory} from 'react-router';
import routes from './routes';


import './index.css';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={ browserHistory } routes={ routes }/>
    </Provider>
    , document.getElementById('root'));