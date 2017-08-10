import React from 'react';
import ReactDOM from 'react-dom';
import BracketValidator from './BracketValidator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BracketValidator inspector={() => {}} />, div);
});
