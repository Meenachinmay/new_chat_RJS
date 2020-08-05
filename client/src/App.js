import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './Pages/Index';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Chatroom from './Pages/Chatroom';
import Dashboard from './Pages/Dashboard';

import store from './store';

import { Provider } from 'react-redux';

function App() {
  return (
    <div className="">
      <Provider store={store}>  
        <Index />
        <Switch>
          <Route path='/dashboard' exact component={ Dashboard } />  
          <Route path='/chatroom' exact component={ Chatroom } />
          <Route path='/login' exact component={ Login } />
          <Route path='/register' exact component={ Register } />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
