import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './modules/auth/register/Register.jsx';
import Home from './modules/auth/Home/Home';
const App = () => {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
      </div>
    </Router>
  );
};

export default App;
