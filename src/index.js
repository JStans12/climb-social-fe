import React from 'react';
import ReactDOM from 'react-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

ReactDOM.render(
  <div>
    <SignupForm />
    <LoginForm />
  </div>,
  document.getElementById('root')
);
