import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import Main from '../Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/'>
                            <Main />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
