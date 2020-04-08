import React, { Component } from "react";

import "./App.css";
import Nav from "./components/Nav";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import * as firebase from "firebase";
import { noteData } from "./firebaseConnect";
import { connect } from "react-redux";

class App extends Component {
  // componentDidMount() {
  //   console.log(noteData);
  // }

  //c1: ADD DATA
  // getData = (item) => {
  //   noteData.push(item);
  // };
  //End ADD DATA
  // START SHOWFORM
  showForm = () => {
    if (this.props.isEdit) {
      return <NoteForm> </NoteForm>;
    }
  };
  //End SHOWFORM
  pushDb = () => {
    var connectDb = firebase.database().ref("dataNote");
    connectDb.push({
      noteTitle: "Ghi chu so 3",
      noteContent: "Noi dung thu 3",
      id: 3,
    });
    console.log("da them noi dung");
  };
  removeDb = (id) => {
    var connectDb = firebase.database().ref("dataNote");
    connectDb.child(id).remove();
    console.log("da xoa noi dung" + id);
  };

  render() {
    return (
      <div>
        <Nav> </Nav>{" "}
        <button
          onClick={() => this.pushDb()}
          type="button"
          className="btn btn-primary"
        >
          Click de push db{" "}
        </button>{" "}
        <button
          onClick={() => this.removeDb("-M3HKrebuv7ZRw7bS-c_")}
          type="button"
          className="btn btn-primary"
        >
          Click de Remove db{" "}
        </button>{" "}
        <div className="container">
          <div className="row">
            <NoteList> </NoteList> {this.showForm()} {/* C1:  ADD DATA */}{" "}
            {/* <NoteForm
                      getData={(item) => {
                        this.getData(item);
                      }}
                    ></NoteForm> */}{" "}
            {/* End  C1 :  ADD DATA */}{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
