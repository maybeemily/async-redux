import { createAction } from 'promise-middleware-redux';
import { getCharacter } from '../services/lastAirbenderApi';

export const [
  fetchCharacter,
  FETCH_CHARACTER,
  FETCH_CHARACTER_LOADING,
  FETCH_CHARACTER_FULFILLED,
  FETCH_CHARACTER_ERROR
] = createAction('FETCH_CHARACTER', getCharacter);
