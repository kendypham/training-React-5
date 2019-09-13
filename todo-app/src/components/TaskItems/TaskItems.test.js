import React from 'react';
import TaskItems from './TaskItems';
import { shallow, mount } from 'enzyme'
const tasks = [{
    id: "oZU9Psa", value: "test", isComplete: false},
    {id: "jZvuScH", value: "qwqwfqw", isComplete: true},
    {id: "b4HsliA", value: "gfgj", isComplete: true},
    {id: "tNrUB9O", value: "wegwe", isComplete: false},
    {id: "T9QtXpo", value: "rtyrty", isComplete: false}]
it('render without crashing', () => {
    const isAll = true
    const wrapper = mount(<TaskItems tasks={tasks} isAll={isAll}/>)
    const item = wrapper.find('.list-group-item')
    expect(item).toHaveLength(3)
});

it('check button in item todo', () => {
    const onCheckFn = jest.fn()
    let isAll = true
    let wrapper = mount(<TaskItems 
        tasks={tasks} isAll={isAll} 
        onCheck={onCheckFn}/>)
    let item = wrapper.find('.list-group-item')
    expect(item).toHaveLength(3)
    //check button on Check 
    const itemToCheck = wrapper.find('.list-group').children().at(0)
    const btnCheck = itemToCheck.children().at(0)
    btnCheck.simulate('click')
    expect(onCheckFn).toHaveBeenCalled()
});

it('edit button in item todo', () => {
    let isAll = true
    let wrapper = mount(<TaskItems 
        tasks={tasks} isAll={isAll} />)
    let item = wrapper.find('.list-group-item')
    expect(item).toHaveLength(3)
    //check button onEdit
    const itemToEdit = wrapper.find('.list-group').children().at(0)
    const btnEdit = itemToEdit.children().at(1)   
    btnEdit.simulate('click')
    const modal = wrapper.find('.modal-body').children().at(0).prop('value')
    expect(modal).toEqual('test')
});

it('delete button in item complete', () => {
    const onDeleteFn = jest.fn()
    let isAll = false
    let wrapper = mount(<TaskItems 
        tasks={tasks} isAll={isAll} 
        onDelete={onDeleteFn}/>)
    let item = wrapper.find('.list-group-item')
    expect(item).toHaveLength(2)
    //check button Delete
    const itemToDelete = wrapper.find('.list-group').children().at(0)
    const btnDelete = itemToDelete.children().at(0)   
    btnDelete.simulate('click')
    expect(onDeleteFn).toHaveBeenCalled()
});

it('undo button in item complete', () => {
    const onUndoFn = jest.fn()
    let isAll = false
    let wrapper = mount(<TaskItems 
        tasks={tasks} isAll={isAll} 
        onUndo={onUndoFn}/>)
    let item = wrapper.find('.list-group-item')
    expect(item).toHaveLength(2)
    //check button Undo
    const itemToUndo = wrapper.find('.list-group').children().at(0)
    const btnUndo = itemToUndo.children().at(1)   
    btnUndo.simulate('click')
    expect(onUndoFn).toHaveBeenCalled()
});