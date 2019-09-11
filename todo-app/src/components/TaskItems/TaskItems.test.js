import React from 'react';
import TaskItems from './TaskItems';
import { shallow, mount } from 'enzyme'

it('render without creashing', () => {
    const tasks = [{
    id: "oZU9Psa", value: "eryeryre", isComplete: false},
    {id: "jZvuScH", value: "qwqwfqw", isComplete: false},
    {id: "b4HsliA", value: "gfgj", isComplete: false},
    {id: "tNrUB9O", value: "wegwe", isComplete: false},
    {id: "T9QtXpo", value: "rtyrty", isComplete: false}]
    const isAll = true
    const wrapper = mount(<TaskItems tasks={tasks} isAll={isAll}/>)
    const item = wrapper.find('.list-group-item')
    expect(item).toHaveLength(5)
});

