import { expect } from '../test_helper.js';
import * as ACTIONS from '../../src/actions/constants.js';
import { addStudent } from '../../src/actions/index.js';

describe('actions', () => {
  describe('add student', () => {
    let action;
    beforeEach(() => {
      let data = {
        _id: 5,
        lesson: 0,
        level: 0,
        interview: 'not set',
        decision: 'pending',
        name: 'John',
        email: 'John@student.com'
      };
      action = addStudent(data);
    });
    it('has to exist', () => {
      expect(action.type).to.be.a('string');
    });
    it('has to be correct type', () => {
      expect(action.type).to.equal(ACTIONS.ADD_STUDENT);
    });

    it('has to have payload as an object', () => {
      expect(action.payload).to.be.an('object');
    });
    it('has to have correct propertins', () => {
      expect(action.payload.name).to.be.a('string');
      expect(action.payload._id).to.be.a('number');
      expect(action.payload.email).to.be.a('string');
      expect(action.payload.level).to.be.a('number');
      expect(action.payload.lesson).to.be.a('number');
      expect(action.payload.interview).to.be.a('string');
      expect(action.payload.decision).to.be.a('string');
    });
  });
});
