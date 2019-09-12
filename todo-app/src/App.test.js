import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme'
describe('Examing syntax', () => {
  const tasks = [{
    id: "oZU9Psa", value: "test", isComplete: false},
    {id: "jZvuScH", value: "qwqwfqw", isComplete: true},
    {id: "b4HsliA", value: "gfgj", isComplete: true},
    {id: "tNrUB9O", value: "wegwe", isComplete: false},
    {id: "T9QtXpo", value: "rtyrty", isComplete: false}]

    it('renders without crashing', () => {
      mount(<App />)
    });

    it('check onAdd', () => {
      const wrapper = mount(<App />)
      const btnAdd = wrapper.find('.card-header').children().at(1)
      btnAdd.simulate('click')
      console.log(wrapper.find('.container').children().at(1).props());
    });
});