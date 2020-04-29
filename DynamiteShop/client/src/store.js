import { createStore, combineReducers, applyMiddleware } from 'redux';
import EditStatusClass from './Reducer/EditStatusClass';
import DbFeatureProducts from './Reducer/DbFeatureProducts';
import DbAllProducts from './Reducer/DbAllProducts';
import thunk from 'redux-thunk'


const allReducer = combineReducers({
  EditStatusClass: EditStatusClass,
  DbFeatureProducts:DbFeatureProducts,
  DbAllProducts
});

// store quan li  Reducer  (  quan li  state &  Action)
var store1 = createStore(allReducer,applyMiddleware(thunk));
console.log(store1.getState());
store1.subscribe(() => {
  console.log('STATE thay doi : ' + JSON.stringify(store1.getState()));
});






//-----------------------------------
// import { createStore } from 'redux';
// const noteInitialState = {
//   isEditStatusClass: false,
// };
// const allreducer = (state = noteInitialState, action) => {
//   switch (action.type) {
//     case 'CHANGE_EDIT_STATUS_CLASS':
//       return { ...state, isEditStatusClass: !state.isEditStatusClass };

//     default:
//       return state;
//   }
// };
// var store1 = createStore(allreducer);
// console.log(store1.getState());
// store1.subscribe(() => {
//   console.log('STATE thay doi : ' + JSON.stringify(store1.getState()));
// });
export default store1;
