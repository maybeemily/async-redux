import { fetchCharacters, FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS, FETCH_CHARACTERS_ERROR, FETCH_CHARACTERS_FULFILLED } from '../actions/charactersActions';

jest.mock('../services/lastAirbenderApi.js');

describe('characters actions', () => {
  it('it dispatches a loading action and a fetch characters action', () => {
    expect(fetchCharacters()).toEqual({
      type: FETCH_CHARACTERS,
      pendingType: FETCH_CHARACTERS_LOADING,
      rejectedType: FETCH_CHARACTERS_ERROR,
      fulfilledType: FETCH_CHARACTERS_FULFILLED,
      payload: expect.any(Promise)
    });
  });
});
