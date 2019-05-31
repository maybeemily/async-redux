import { combineReducers } from 'redux';
import characters from './charactersReducer';
import character from './characterDetailReducer';

export default combineReducers({
  characters,
  character
});
