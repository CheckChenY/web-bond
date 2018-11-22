// configureStore.js
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from '../middleware';
import rootReducer from '../reducers';

// const nextReducer = require('../reducers');

function configure(initialState) {
  // const create = window.devToolsExtension
  //   ? window.devToolsExtension()(createStore)
  //   : createStore;

  // const createStoreWithMiddleware = applyMiddleware(
  //   thunkMiddleware,
  //   logger,
  // )(create);

  // const store = createStoreWithMiddleware(rootReducer, initialState);

  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  let middleware = [thunkMiddleware]
  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger]
  }

  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware),
  );
  return store;
}
export default configure;