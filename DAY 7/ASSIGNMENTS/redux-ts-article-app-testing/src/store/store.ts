
//add imports for redux
import {createStore,applyMiddleware, Store}  from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

//create store
export const store:Store<Articlestate,ArticleAction> &{
  dispatch:DispatchType} = createStore(reducer,applyMiddleware(thunk))


  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;