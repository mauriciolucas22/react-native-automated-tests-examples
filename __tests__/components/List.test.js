import React from 'react';
import { shallow } from 'enzyme';
import { Text, ScrollView, Button, AsyncStorage } from 'react-native';
import sinon from 'sinon';

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

  it('can add new post', () => {
    const wrapper = shallow(<List />);

    wrapper.find({ id: 'new' }).simulate('press');

    expect(wrapper.state('posts')).toHaveLength(1);
  });

  it('can delete post', () => {
    const wrapper = shallow(<List />);
    wrapper.setState({ posts });

    wrapper.instance().deletePost(1);

    expect(wrapper.state('posts'))
      .toEqual(posts.filter(post => post.id !== 1));
  });

  it('can save posts', () => {
    sinon.spy(AsyncStorage, 'setItem');

    const wrapper = shallow(<List />);
    wrapper.setState({ posts });

    wrapper.find({ id: 'save' }).simulate('press');

    expect(AsyncStorage.setItem.calledOnce).toBe(true);
    expect(AsyncStorage.setItem.args[0][1]).toBe(JSON.stringify(posts));
  });
});