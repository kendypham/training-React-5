import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme'
import * as todo from './utils'
import TaskList from './components/TaskList/TaskList';

describe('Examing syntax', () => {
  const tasks = [{
    id: "oZU9Psa", value: "test", isComplete: false
  },
  { id: "testId", value: "deleteValue", isComplete: true },
  { id: "b4HsliA", value: "gfgj", isComplete: true },
  { id: "tNrUB9O", value: "wegwe", isComplete: false },
  { id: "T9QtXpo", value: "rtyrty", isComplete: false }]

  it('useEffect', () => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
    const wrapper = mount(<App />)
    expect(wrapper.find('.container').children().at(1).prop('tasks')).toEqual(tasks);
  });

  it('renders without crashing', () => {
    mount(<App />)
  });

  it('check onAdd', () => {
    const wrapper = mount(<App />)
    const btnAdd = wrapper.find('.card-header').children().at(1)
    btnAdd.simulate('click')
    expect(wrapper.find('.container').children().at(1).prop('tasks').length).toEqual(6);
  });

  it('check onCheck', () => {
    const wrapper = mount(<App />)
    const btnCheck = wrapper.find('.list-group').children().at(0).children().at(0)
    btnCheck.simulate('click')
    expect(wrapper.find('.container').children().at(1).prop('tasks')[0].isComplete).toEqual(true);
  });

  it('check onSave', () => {
    const wrapper = mount(<App />)
    const btnCheck = wrapper.find('.list-group').children().at(0).children().at(1)
    btnCheck.simulate('click')
    let input = wrapper.find('.modal-body').children().at(0)
    const event = {
      target: { name: 'value', value:  'new value' }
    };
    input.simulate('change', event)
    input = wrapper.find('.modal-body').children().at(0)
    const buttonSave = wrapper.find('div.modal-footer').children().at(1)
    buttonSave.simulate('click')
    expect(wrapper.find('.container').children().at(1).prop('tasks')[3].value).toEqual('new value');
  });
  
  it('check onUndo', () => {
    let wrapper = shallow(<App />);
    const test = wrapper.find('TaskList').prop('onDelete');
    test('test')
    expect(wrapper.find('TaskList').prop('tasks')).toEqual([]);  
  });

  it('check onChange', () => {
    let wrapper = shallow(<App />);
    const test = wrapper.find('TaskList').prop('onUndo');
    test('test')
    expect(wrapper.find('TaskList').prop('tasks')[0].isComplete).toEqual(false);
  });
});



