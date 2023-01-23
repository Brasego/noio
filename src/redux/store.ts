import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

//root-reducer: combination of all our reducers
import { rootReducer } from "./root-reducer";

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
