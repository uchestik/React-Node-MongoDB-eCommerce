import React from 'react';
import ReactDOM from 'react-dom';
import promiseMiddleware from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'


//components
import App from './components/app';

//import reducer
import reducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)}>
        <App />
    </Provider>
, document.getElementById('root'));