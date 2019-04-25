import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './Reducers/rootReducer'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
const middleware = [thunk]
const store = createStore(rootReducer,applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById("root")
)