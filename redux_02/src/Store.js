import { createStore, combineReducers } from "redux";
import numReducer from "./Reducer/numReducer";
import editStatusReducer from "./Reducer/editStatusReducer";

// var oldState = {
//   num: ["man hinh ", "chuot ", "banphim "],
//   editStatus: true
// };
// // var editStatus: true;
// //reducer state & Action
// var reducer1 = (state = oldState, action) => {
//   switch (action.type) {
//     case "CHANGE_EDIT_STATUS":
//       return {
//         ...state,
//         editStatus: !state.editStatus
//       };
//     case "ADD_NEW":
//       return {
//         ...state,
//         num: [...state.num, action.newItem]
//       };
//     case "DELETE":
//       return {
//         ...state,
//         num: state.num.filter((value, key) => key !== action.number)
//       };

//     default:
//       return state;
//   }
// };

const allReducer = combineReducers({
  num: numReducer,
  editStatus: editStatusReducer
});
// store quan li  Reducer  (  quan li  state &  Action)
var store1 = createStore(allReducer);
console.log(store1.getState());
store1.subscribe(() => {
  console.log("STATE thay doi : " + JSON.stringify(store1.getState()));
});
store1.dispatch({
  type: "CHANGE_EDIT_STATUS"
});
store1.dispatch({
  type: "ADD_NEW",
  newItem: "tainghe"
});
store1.dispatch({
  type: "DELETE",
  number: 0
});
export default store1;
