import React from 'react';
import ReactDOM from 'react-dom';
import SignupForm from '../../src/components/SignupForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignupForm />, div);
});
