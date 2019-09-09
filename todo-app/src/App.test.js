import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Examing syntax', () => {
    it('sums number', () => {
      expect(2+2).toEqual(4)
      expect(2+2).toBeGreaterThan(3)
    });

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});