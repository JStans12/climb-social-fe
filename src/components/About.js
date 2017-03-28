import React, { Component } from 'react';
import '../stylesheets/about.css';
import '../stylesheets/simple-grid.css';
import classNames from 'classnames';

class About extends Component {
  render() {
    const aboutClasses = classNames("about", "col-2-4");

    return (
      <div className={aboutClasses}>
      </div>
    );
  }
}

export default About;
