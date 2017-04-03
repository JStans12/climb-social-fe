import React, { Component } from 'react';
import '../stylesheets/form.css';
import '../stylesheets/simple-grid.css';
import AuthService from '../services/AuthService';
import classNames from 'classnames';

const Auth = new AuthService()

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let email = this.email.value;
    let password = this.password.value;
    Auth.authenticate(email, password);
  }

  render() {
    const formClasses = classNames("form", "col-3-4", "push-right");

    return (
      <div className={formClasses}>
        <div className="header">Login</div>
        <form>
          <div className="input-group">
            <div className="input-label"><h1>Email</h1></div>
            <input className="login-email" type="text" name="user-email"
              ref={ function(node){ this.email = node }.bind(this) }
            />
          </div>
          <div className="input-group">
            <div className="input-label"><h1>Password</h1></div>
            <input className="login-password" type="password" name="user-password"
              ref={ function(node){ this.password = node }.bind(this) }
            />
          </div>
          <button className="login-submit" type="submit" onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
