import React from 'react';
import { shallow } from 'enzyme';
import BoilerplateReactCompnent from '../src/main';

describe('Basic Test', () => {
  test('renders to document', () => {
    const component = shallow(<BoilerplateReactCompnent />);
    const cnt = component.find('.react-component');
    cnt.simulate('click');
    expect(cnt).toMatch(/Hello React/);
  });
});
