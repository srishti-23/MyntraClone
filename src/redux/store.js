// redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import handleCart from './reducers/handleCart';
import wishlistReducer from './reducer/wishlistReducer';

const rootReducer = combineReducers({
  cart: handleCart,
  wishlist: wishlistReducer,
  // Add other reducers here
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
