import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

jest.mock('../MicroFrontend', () => {
  const MicroFrontend = () => <div />;
  return MicroFrontend;
});

describe('App', () => {
  const getCurrentRoute = app =>
    app.find('Router').prop('history').location.pathname;

  it('can render the browse micro frontend, and randomly pick a restaurant', () => {
    const app = mount(<App />);

    // Initially we see the list of restaurants, at the root route
    expect(getCurrentRoute(app)).toEqual('/');
    expect(app.find('MicroFrontend')).toHaveProp({ name: 'Component' });

    // If we click the 'surprise me' link...
    app
      .find('a')
      .find({ href: '/about' })
      .simulate('click', { button: 0 });

    // Then the route should update and we should be looking at a restaurant
    expect(getCurrentRoute(app)).toMatch(/\/about/);
  });
});
