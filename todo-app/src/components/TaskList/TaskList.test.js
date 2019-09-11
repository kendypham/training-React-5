import React from 'react';
import TaskList from './TaskList';
import { shallow, mount } from 'enzyme'

it('render without creashing', () => {
    shallow(<TaskList />)
});