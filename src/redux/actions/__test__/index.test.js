import SET_MESSAGE from '../actionTypes';
import setMessage from '../index';

describe('Сheck actions creators and actions', () => {
  it('setMessage must create action SET_MESSAGE', () => {
    expect(setMessage('newMessage')).toEqual({
      type: SET_MESSAGE,
      message: 'newMessage',
    });
  });
});
