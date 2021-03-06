import * as React from 'react';
import { AppProvider } from '../AppProvider';

import renderer from 'react-test-renderer';

let props = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('[AppProvider] rendering test', () => {
  let json: ReactTestRenderJSON;
  const component = <AppProvider { ...props } />;

  it('component and snapshot matches', () => {
    json = renderer.create(component).toJSON();
    expect(json).toMatchSnapshot();
  });
});

describe('[AppProvider] interactions', () => {
  let rendered: TestRenderer.ReactTestRenderer;
  let root: TestRenderer.ReactTestRenderer.root;
  const component = <AppProvider { ...props } />;

  const user = {
    displayName: 'dooboolab',
    age: 30,
    job: '',
  };

  beforeEach(() => {
    props = {
      navigation: {
        navigate: jest.fn(),
      },
    };
    rendered = renderer.create(component);
    root = rendered.root;
  });
  it('should check [resetUser] actions', () => {
    let instance = root.instance;
    instance.actions.resetUser();
  });

  it('should check trigger actions when method called', () => {
    let instance = root.instance;
    instance.actions.setUser({
      displayName: '',
      age: 0,
      job: '',
    });
  });
});
