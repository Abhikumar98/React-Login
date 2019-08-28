import React from 'react';
import ReactDOM from 'react-dom';
import './all.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import mainReducer from './reducers/mainReducer'
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import Contain from './components/Contain';

const intialState = {
    user: {},
    isChecked: false,
    signUp: false,
    signedUp: false,
    loggedIn: false
};

const store = createStore(mainReducer, intialState);

const Root = ()=>(
    <Provider store={store}>
        <Contain />
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
