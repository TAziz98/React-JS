import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route}  from 'react-router-dom'
import ViewAll from './Components/ViewAll'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import rootReducer from './Components/rootReducer'
import thunk from 'redux-thunk'
const middleware = [thunk]
const store = createStore(rootReducer,applyMiddleware(...middleware));

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
     <Route exact path="/" component={App}/>
    <Route path="/view-all" component={ViewAll}/>
    </Provider>
    </BrowserRouter>,
 document.getElementById('root'));
serviceWorker.unregister();
