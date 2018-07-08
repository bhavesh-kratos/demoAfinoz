import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import watchFetchGit from '../sagas/fetchGitSaga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const enhancer = applyMiddleware(...middlewares);
  const store = createStore(
    rootReducer,
    enhancer
  );
  sagaMiddleware.run(watchFetchGit);
  return store;
};


export default configureStore;
