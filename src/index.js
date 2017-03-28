import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

ReactDOM.render(
  <div className="grid">
    <About />
    <SignupForm />
    <LoginForm />
  </div>,
  document.getElementById('root')
);
