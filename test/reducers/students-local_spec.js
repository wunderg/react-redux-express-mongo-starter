import { expect } from '../test_helper.js';
import studentReducer from '../../src/reducers/students.local.js';
import * as ACTIONS from '../../src/actions/constants.js';


describe('Student Reducer', () => {
  it('Handles action with unknown type', () => {
    expect(studentReducer(undefined, {})).to.be.instanceof(Object);
    expect(studentReducer(undefined, {})).to.be.eql({ isFetching: true, students: [] });
  });

  it('Handles action of type ADD_STUDENT', () => {
    const data = {
      _id: 5,
      lesson: 0,
      level: 0,
      interview: 'not set',
      decision: 'pending',
      name: 'John',
      email: 'John@student.com'
    };
    const state = { isFetching: true, students: [] };
    const action = { type: ACTIONS.ADD_STUDENT, payload: data };
    expect(studentReducer(state, action)).to.be.eql({ isFetching: true, students: [data] });
  });
});
