import React from 'react';
import './App.scss';
import Login from './modules/auth/login/Login';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './modules/auth/register/Register';
const App = () => {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </div>
    </Router>
  );
};

export default App;
