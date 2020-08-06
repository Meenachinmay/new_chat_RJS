import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './Pages/Index';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Chatroom from './Pages/Chatroom';
import Dashboard from './Pages/Dashboard';

import { useSelector } from 'react-redux';

import AlertMessage from './_helperComponents/AlertMessage';

function App() {

  // this will be called in every half an hour
  // setTimeout(() => {
  //   const rooms = JSON.parse(localStorage.getItem('chatrooms'))
  //   if (rooms.ttl > Date.now()){
  //     localStorage.removeItem('chatrooms');
  //   }
  // }, 10000);

  // for showing alert message
  const alertMessage = useSelector(state => state.errors.message);
  const alertType = useSelector(state => state.errors.alertType);

  // for showing notification
  const showNotification = useSelector(state => state.ui.showNotification);
  const notificationMessage = useSelector(state => state.ui.notificationMessage)

  return (
    <div className="">
        <Index />
        {showNotification && notificationMessage ? <AlertMessage message={notificationMessage} alertType="bg-green-500" /> : null}
        {alertType && alertMessage ? <AlertMessage message={alertMessage} alertType={alertType} /> : null}
        <Switch> 
          <Route path='/dashboard' exact component={ Dashboard } />  
          <Route path='/chatroom' exact component={ Chatroom } />
          <Route path='/login' exact component={ Login } />
          <Route path='/register' exact component={ Register } />
        </Switch>
    </div>
  );
}

export default App;
