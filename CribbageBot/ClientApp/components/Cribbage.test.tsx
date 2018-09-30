import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Cribbage from './Cribbage';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cribbage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
