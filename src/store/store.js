import { applyMiddleware, combineReducers, createStore,compose } from "redux";
import thunk from 'redux-thunk';
import { authReducer } from "../reducers/authReducer";
import { autoReducer } from "../reducers/autoReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    auto: autoReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)