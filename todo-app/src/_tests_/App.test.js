import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme'

describe('Examing syntax', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('test components', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find('Header')).toHaveLength(1)
      expect(wrapper.find('TaskList')).toHaveLength(1)
    });

});