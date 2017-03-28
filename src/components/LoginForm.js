import React, { Component } from 'react';
import './LoginForm.css';
import classNames from 'classnames';

class LoginForm extends Component {
  render() {
    const formClasses     = classNames("login-form");
    const emailClasses    = classNames("login-input", "login-email");
    const passwordClasses = classNames("login-input", "login-password");
    const loginClasses    = classNames("submit-button", "login-button")

    return (
      <div className={formClasses}>
        <h1>Login</h1>
        <form>
          <p>
            <div className="input-label"><h5>Email</h5></div>
            <input className={emailClasses} type="text" name="user-email" />
          </p>
          <p>
            <div className="input-label"><h5>Password</h5></div>
            <input className={passwordClasses} type="password" name="user-password" />
          </p>
          <button className={loginClasses} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
