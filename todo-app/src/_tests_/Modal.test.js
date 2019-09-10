import React from 'react';
import Modal from '../components/Modal';
import { shallow, mount } from 'enzyme'
// jest mock functions (mocks this.props.func)
const handleChange = jest.fn()
const onSave = jest.fn()
const onClick = jest.fn()

const baseProps = {
    task: {
        id: 'test',
        isComplete: false,
        value: "di choi"
    },
    onSave,
    onClick
}
describe('Modal', () => {
    it('check button simulate', () => {
        const wrapper = shallow(<Modal {...baseProps} />)
        wrapper.setProps({
            task: {
                id: 'test',
                isComplete: false,
                value: "di choi"
            }
        })
        beforeEach(() => wrapper);
        const button = wrapper.find('#btn-save')
        button.simulate('click')
        expect(baseProps.onSave).toHaveBeenCalled()
    });

    it('check input change', () => {
        const value = 'di choi'
        const wrapper = shallow(<Modal {...baseProps} />)
        const result = wrapper.find('input')
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState')
        useStateSpy.mockImplementation((init) => [init, setState]);
        result.simulate('change', { target: { value } })
        console.log("handle", wrapper.state());

        expect(wrapper.state().value).toBe(value)
    });
});