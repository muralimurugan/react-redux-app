import {createStore,compose,applyMiddleware} from '../../../../Library/Caches/typescript/2.9/node_modules/redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
const initialState={};
const middleware=[thunk];
const store=createStore(rootReducer,initialState,compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
);

export default store;