import Enzyme, { shallow, render, mount } from 'enzyme';

Enzyme.configure({});

global.shallow = shallow;
global.render = render;
global.mount = mount;
