import { createStore, applyMiddleware } from 'redux';
import reducer from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/saga';

const create = (history) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer(history),
    composeWithDevTools(
      applyMiddleware(thunk, routerMiddleware(history), sagaMiddleware),
    ),
  );

  sagaMiddleware.run(rootSaga); // 나의 사가들을 실행

  return store;
};

export default create;
