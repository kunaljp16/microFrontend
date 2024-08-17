import utils from './get-session-storage';

describe('utils', () => {
  it('should work', () => {
    expect(utils('someArgument')).toEqual('utils');
  });
});
