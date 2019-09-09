import React from 'react';
import Header from '../components/Header';
import { shallow } from 'enzyme'

describe('Header', () => {
    it('render Header', () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.find('.row.justify-content-center')).toHaveLength(1)
        expect(wrapper.find('h1').text()).toMatch(/ToDo App/)
    });
});