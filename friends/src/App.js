import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import LoginForm from './components/login/LoginForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import RegisterForm from './components/register/RegisterForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Route exact path="/" component={LoginForm} />
        <Route exact path="/registerform" component={RegisterForm} />
        <PrivateRoute exact path="/friendslist" component={FriendsList} />
      </header>
    </div>
  );
}

export default App;
