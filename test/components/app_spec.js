import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { App } from '../../src/containers/app/index.js';
import Spinner from '../../src/helpers/spinner.js';

describe('Main App component ', () => {
  let user;
  let wrapper;

  it('show spinner while fetching', () => {
    user = {
      isFetching: true
    };
    wrapper = shallow(<App user={user} />);
    expect(wrapper.find(Spinner)).to.have.length(1);
  });

  describe('Render when user NOT loggin in', () => {
    beforeEach(() => {
      user = {
        isAuthenticated: false
      };
      wrapper = shallow(<App user={user} />);
    });

    it('shows main component ', () => {
      expect(wrapper.find('#main')).to.have.length(1);
    });

    it('have id main ', () => {
      expect(wrapper.is('#main')).to.equal(true);
    });

    it('have to have a container ', () => {
      expect(wrapper.find('.container').hasClass('container')).to.equal(true);
    });
  });

  describe('Render when user IS loggin in', () => {
    beforeEach(() => {
      user = {
        isAuthenticated: true
      };
      wrapper = shallow(<App user={user} />);
    });

    it('shows main component ', () => {
      expect(wrapper.find('#main')).to.have.length(1);
    });

    it('have id main ', () => {
      expect(wrapper.is('#main')).to.equal(true);
    });

    it('have to have a container ', () => {
      expect(wrapper.find('.container').hasClass('container')).to.equal(true);
    });
  });

  describe('validate user', () => {
    let validate;
    beforeEach(() => {
      user = {
        isAuthenticated: false
      };
      global.window.localStorage.clean();
      validate = sinon.spy();
      wrapper = shallow(<App user={user} loginWithToken={validate} />);
    });

    it('should not validate if user is authenticated', () => {
      user = {
        isAuthenticated: true
      };
      global.window.localStorage.setItem('id_token', 123456789);
      wrapper = shallow(<App user={user} loginWithToken={validate} />);
      expect(validate.called).to.equal(false);
    });

    it('should validate if token exist', () => {
      global.window.localStorage.setItem('id_token', 123456789);
      wrapper = shallow(<App user={user} loginWithToken={validate} />);
      expect(validate.called).to.equal(true);
    });

    it('should not validate if token doesnt exist', () => {
      expect(validate.called).to.equal(false);
    });
  });
});
