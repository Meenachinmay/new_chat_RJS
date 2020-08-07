import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './Pages/Index';

import { useSelector } from 'react-redux';

import AlertMessage from './_helperComponents/AlertMessage';
import Spinner from './_helperComponents/Spinner';

const Login = React.lazy(() => import('./Pages/Login'));
const Register = React.lazy(() => import('./Pages/Register'));
const Chatroom = React.lazy(() => import('./Pages/Chatroom'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard'));

function App() {

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
        <React.Suspense fallback={<Spinner />}>
          <Switch> 
            <Route path='/dashboard' exact component={ Dashboard } />  
            <Route path='/chatroom/:id' exact component={ Chatroom } />
            <Route path='/login' exact component={ Login } />
            <Route path='/register' exact component={ Register } />
          </Switch>
        </React.Suspense>
    </div>
  );
}

export default App;
