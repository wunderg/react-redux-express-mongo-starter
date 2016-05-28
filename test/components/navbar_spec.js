import React from 'react';
import { expect } from '../test_helper.js';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Navbar from '../../src/containers/navbar/index.js';

describe('Navbar', () => {
  let wrapper;
  describe('When user not loged in', () => {
    beforeEach(() => {
      wrapper = shallow(<Navbar isAuthenticated={false} />);
    });

    it('shows ptc portal logo', () => {
      expect(wrapper.find('.brand-logo')).to.have.length(1);
    });

    it('shows navbar component', () => {
      expect(wrapper.find('.nav-wrapper')).to.have.length(1);
    });

    it('show sidebar nav on small screen', () => {
      expect(wrapper.find('.side-nav')).to.have.length(1);
    });

    it('show singin and singup on desktop', () => {
      expect(wrapper.find('.right').children()).to.have.length(2);
    });
    it('show singin and singup on mobile', () => {
      expect(wrapper.find('.side-nav').children()).to.have.length(2);
    });
  });


  describe('When user is loged in', () => {
    beforeEach(() => {
      wrapper = shallow(<Navbar isAuthenticated={true} />);
    });

    it('shows ptc portal logo', () => {
      expect(wrapper.find('.brand-logo')).to.have.length(1);
    });

    it('shows navbar component', () => {
      expect(wrapper.find('.nav-wrapper')).to.have.length(1);
    });

    it('show sidebar nav on small screen', () => {
      expect(wrapper.find('.side-nav')).to.have.length(1);
    });

    it('show singin and singup on desktop', () => {
      expect(wrapper.find('.right').children()).to.have.length(7);
    });

    it('show singin and singup on mobile', () => {
      expect(wrapper.find('.side-nav').children()).to.have.length(7);
    });

    it('should be able to logout', () => {
      const logout = sinon.spy();
      wrapper = shallow(<Navbar isAuthenticated={true} logout={logout} />);
      wrapper.find('.logout').simulate('click');
      wrapper.setProps({ isAuthenticated: false });
      expect(logout.called).to.equal(true);
      expect(wrapper.find('.right').children()).to.have.length(2);
    });
  });
});
