import { noteData } from "./firebaseConnect";
import { createStore } from "redux";
const noteInitialState = {
  isEdit: true,
  editItem: {},
  isAdd: false
};
const allreducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      noteData.push(action.getItem);
      console.log("Da them DATA" + JSON.stringify(action.getItem));
      return state;
    case "CHANGE_EDIT_STATUS":
      return { ...state, isEdit: !state.isEdit };
    case "CHANGE_ADD_STATUS":
      return { ...state, isAdd: !state.isAdd };
    case "GET_EDIT_DATA":
      //lay state va them {item}-> editItem
      return { ...state, editItem: action.editObject };
    case "EDIT_DATA":
      noteData.child(action.getItem.id).update({
        noteTitle: action.getItem.noteTitle,
        noteContent: action.getItem.noteContent
      });
      console.log("Du lieu sua thanh cong " + JSON.stringify(action.getItem));
      return { ...state, editItem: {} };
    case "DELETE_DATA":
      noteData.child(action.deleteId).remove();
      console.log("Xoa du lieu thanh cong " + JSON.stringify(action.deleteId));
      return state;
    default:
      return state;
  }
};
var store = createStore(allreducer);
// store.subscribe(function() {
//   console.log(store.getState());
// });
export default store;
