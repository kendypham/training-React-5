import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme'

describe('Header', () => {
    it('renders without crashing', () => {
        shallow(<Header />)
    });
});