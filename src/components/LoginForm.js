import React, { Component } from 'react';
import '../stylesheets/form.css';

class LoginForm extends Component {
  render() {

    return (
      <div className="form">
        <div className="header">Login</div>
        <form>
          <div className="input-group">
            <div className="input-label"><h1>Email</h1></div>
            <input className="login-email" type="text" name="user-email" />
          </div>
          <div className="input-group">
            <div className="input-label"><h1>Password</h1></div>
            <input className="login-password" type="password" name="user-password" />
          </div>
          <button className="login-submit" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
