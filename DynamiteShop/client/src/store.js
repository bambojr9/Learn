// import { createStore, combineReducers } from 'redux';
// import EditStatusClass from './Reducer/EditStatusClass';

// const allReducer = combineReducers({
//   isEdit: EditStatusClass,
// });

// store quan li  Reducer  (  quan li  state &  Action)
// var store1 = createStore(allReducer);
// console.log(store1.getState());
// store1.subscribe(() => {
//   console.log('STATE thay doi : ' + JSON.stringify(store1.getState()));
// });






//-----------------------------------
import { createStore } from 'redux';
const noteInitialState = {
  isEditStatusClass: false,
};
const allreducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'CHANGE_EDIT_STATUS_CLASS':
      return { ...state, isEditStatusClass: !state.isEditStatusClass };

    default:
      return state;
  }
};
var store1 = createStore(allreducer);
console.log(store1.getState());
store1.subscribe(() => {
  console.log('STATE thay doi : ' + JSON.stringify(store1.getState()));
});
export default store1;
