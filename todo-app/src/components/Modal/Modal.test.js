import React from 'react';
import Modal from './Modal';
import { shallow, mount } from 'enzyme'
const task = {
    id: 'testid',
    value: 'test value',
    isComplete: false
}

it('render without creashing', () => {
    shallow(<Modal />)
});

it('save changes', () => {
    const onSaveFn = jest.fn()
    const wrapper = mount(<Modal task={task} onSave={onSaveFn} />)
    const button = wrapper.find('div.modal-footer').children().at(1)
    button.simulate('click')
    expect(onSaveFn).toHaveBeenCalled()
    const input = wrapper.find('input')
    expect(input.prop('value')).toEqual(task.value)
});

it('should call onChange prop', () => {
    const event = {
        target: { name: 'value', value: 'the-value' }
    };
    const wrapper = mount(<Modal task={task} />);
    let input = wrapper.find('input').simulate('change', event);
    input = wrapper.find('input')
    expect(input.prop('value')).toEqual('the-value')
});

it('useEffect', () => {
    const newTask = {
        id: 'testid1',
        value: 'change value',
        isComplete: false
    }
    const wrapper = mount(<Modal task={task} />)
    wrapper.setProps({
        task: newTask
    })
    expect(wrapper.prop('task')).toEqual(newTask)
});