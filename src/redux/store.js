import taskReducer from "./taskReducer";
import { legacy_createStore,combineReducers,applyMiddleware } from "redux";
import logger from "redux-logger"

const middleware=applyMiddleware(logger)

const rootReducer=combineReducers({
    data:taskReducer
})

const store =legacy_createStore(rootReducer,middleware)
export default store

