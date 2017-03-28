import React, { Component } from 'react';
import './Login.css';
import classNames from 'classnames';

class Login extends Component {
  render() {
    var inputClasses = classNames("ui", "input");

    return (
      <div className={inputClasses}>
        <input type="text" placeholder="Search..." />
      </div>
    );
  }
}

export default Login;
