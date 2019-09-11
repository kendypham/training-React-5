import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme'



describe('Examing syntax', () => {
    it('renders without crashing', () => {
      shallow(<App />)
    });

    it('test components', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.find('Header')).toHaveLength(1)
      expect(wrapper.find('TaskList')).toHaveLength(1)
    });

    // it('test onAdd', () => {
    //   const wrapper = mount(<App />)
    //   const onAddSpy = jest.spyOn(wrapper.instance(),'onAdd')
    //   expect(onAddSpy).toHaveBeenCalled()
    // });

});