import { createStore, compose, applyMiddleware } from 'redux';
import rootReducers from '../reducers';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;
const configureStore = () => {
  const middlewares = [];
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  );
  const store = createStore(rootReducers, enhancer);
  return store;
};
export default configureStore;
