import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../store';
import Routing from '../Routes/Routing';
import LeftMenu from '../LeftMenu/';

import './App.scss';
import Main from '../Main';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Main/>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
