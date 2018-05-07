import React from 'react';
import { shallow } from 'enzyme';
import { Text, ScrollView } from 'react-native';

import List from '../../src/List';

const posts = [
  { id: 1, title: 'Test', description: 'desc' },
  { id: 2, title: 'Test', description: 'desc' },
  { id: 3, title: 'Test', description: 'desc' },
];

describe('<List />', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<List posts={posts} />);
    expect(wrapper.find(ScrollView).exists()).toBe(false);

    wrapper.setState({ posts });
    expect(wrapper.find(ScrollView).children()).toHaveLength(3);
  });

  it('shows empty message', () => {
    const wrapper = shallow(<List posts={[]} />);
    expect(wrapper.contains(<Text>Nenhum post!</Text>)).toBe(true);

    wrapper.setState({ posts });
    expect(wrapper.contains(<Text>Nenhum post!</Text>)).toBe(false);

  });
});