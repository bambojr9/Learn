import React from "react";
import { createStore } from "redux";
// import { Button } from "reactstrap";
import "./App.css";

function App() {
  // khai bao -> state

  var oldState = {
    num: ["man hinh", "chuot", "ban phim"],
    editStatus: true
  };
  // var editStatus: true;
  //reducer state & Action
  var reducer1 = (state = oldState, action) => {
    switch (action.type) {
      case "CHANGE_EDIT_STATUS":
        return {
          ...state,
          editStatus: !state.editStatus
        };
        break;
      case "ADD_NEW":
        return {
          ...state,
          num: [...state.num, action.newItem]
        };
      case "DELETE":
        return {
          ...state,
          num: state.num.filter((value, key) => key !== action.number)
        };
        break;
      default:
        return state;
        break;
    }
  };
  // store quan li  Reducer  (  quan li  state &  Action)
  var store1 = createStore(reducer1);
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
  // ENd;
  // function todos(state = [], action) {
  //   switch (action.type) {
  //     case "ADD_TODO":
  //       return state.concat([action.text]);
  //     default:
  //       return state;
  //   }
  // }
  // const store = createStore(todos, ["Use Redux"]);
  // store.dispatch({
  //   type: "ADD_TODO",
  //   text: "Read the docs"
  // });
  // console.log(store.getState());
  // [ 'Use Redux', 'Read the docs' ]
  return (
    <div className="App">
      <h1> HaiLuuuu </h1>{" "}
    </div>
  );
}

export default App;
