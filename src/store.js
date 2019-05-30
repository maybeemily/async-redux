import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducer from './reducers';

export default createStore(
  reducer,
  compose(
    applyMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
