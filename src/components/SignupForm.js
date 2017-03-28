import React, { Component } from 'react';
import '../stylesheets/form.css';

class SignupForm extends Component {
  render () {

    return (
      <div className="form">
        <div className="header">Sign Up</div>
        <form>
          <div className="input-group">
            <div className="input-label"><h1>Email</h1></div>
            <input className="signup-email" type="text" name="user-email" />
          </div>
          <div className="input-group">
            <div className="input-label"><h1>Password</h1></div>
            <input className="signup-password" type="password" name="user-password" />
          </div>
          <div className="input-group">
            <div className="input-label"><h1>Confirm Password</h1></div>
            <input className="signup-password-confirmation" type="password" name="user-password-confirmation" />
          </div>
          <button className="signup-submit" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
