import { fetchCharacter, FETCH_CHARACTER_LOADING, FETCH_CHARACTER, FETCH_CHARACTER_ERROR, FETCH_CHARACTER_FULFILLED } from '../actions/characterDetailActions';

jest.mock('../services/lastAirbenderApi.js');

describe('character actions', () => {
  it('it dispatches a loading action and a fetch single character action', () => {
    expect(fetchCharacter()).toEqual({
      type: FETCH_CHARACTER,
      pendingType: FETCH_CHARACTER_LOADING,
      rejectedType: FETCH_CHARACTER_ERROR,
      fulfilledType: FETCH_CHARACTER_FULFILLED,
      payload: expect.any(Promise)
    });
  });
});
