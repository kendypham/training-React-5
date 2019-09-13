import React from 'react';
import TaskList from './TaskList';
import { shallow, mount } from 'enzyme'
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
const tasks = [{
    id: "oZU9Psa", value: "eryeryre", isComplete: false
},
{ id: "jZvuScH", value: "qwqwfqw", isComplete: true },
{ id: "b4HsliA", value: "gfgj", isComplete: true },
{ id: "tNrUB9O", value: "wegwe", isComplete: false },
{ id: "T9QtXpo", value: "rtyrty", isComplete: false }]

it('render without creashing', () => {
    mount(<TaskList tasks={tasks} />)
});

it('check show all', () => {
    let wrapper = mount(<TaskList tasks={tasks} />)
    const btn = wrapper.find('.card-footer').children().at(0)
    btn.simulate('click')
    expect(wrapper.find('.card-body').children().first().prop('isAll')).toEqual(true)
});

it('check show complete', () => {
    let wrapper = mount(<TaskList tasks={tasks} />)
    const btn = wrapper.find('.card-footer').children().at(1)
    btn.simulate('click')
    expect(wrapper.find('.card-body').children().first().prop('isAll')).toEqual(false)
});


it('check add button', () => {
    const addFn = jest.fn()
    let wrapper = mount(<TaskList tasks={tasks} onAdd={addFn}/>)
    const button = wrapper.find('.card-header').children().at(1)
    button.simulate('click')
    expect(addFn).toHaveBeenCalled()
    expect(wrapper.find('.card-header').children().at(0).prop('value')).toEqual('')
});

it('handle change', () => {
    let wrapper = mount(<TaskList tasks={tasks}/>)
    let input = wrapper.find('.card-header').children().at(0)
    input.simulate('change',{ target : {
        name : 'value',
        value : 'new test'
    }})
    input = wrapper.find('.card-header').children().at(0)
    expect(input.prop('value')).toEqual('new test')
});