import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMidleware = createSagaMiddleware();
const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMidleware))
);

sagaMidleware.run(rootSaga);

export default store;
