import reducer from './characterDetailReducer';
import { FETCH_CHARACTER } from '../actions/characterDetailActions';

describe('characters reducer', () => {
  it('handles the fetch character action', () => {
    const initialState = { 
      loading: true,
      character: {},
      error: null
    };
    
    const newState = reducer(initialState, {
      type: FETCH_CHARACTER,
      payload: { name: 'cool name' }
    });

    expect(newState).toEqual({
      loading: false,
      character: { name: 'cool name' },
      error: null
    });
  });
});
