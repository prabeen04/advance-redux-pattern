import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import GAMiddleware from "../middleware/googleAnalytics";
import loggerMiddleware from "../middleware/loggerMiddleware";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk, GAMiddleware, loggerMiddleware))
);
export default store;
