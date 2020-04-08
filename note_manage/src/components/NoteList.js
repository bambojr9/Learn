import React, { Component } from "react";
import NoteItem from "./NoteItem";
import { noteData } from "../firebaseConnect";
class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DataFireBase: [],
    };
  }

  //GET DATA TU DATABASE
  componentDidMount() {
    noteData.on("value", (notes) => {
      // console.log(notes.val());
      //convert  notes ->  mang?
      var arrayData = [];
      notes.forEach((element) => {
        const key = element.key;
        const noteTitle = element.val().noteTitle;
        const noteContent = element.val().noteContent;
        arrayData.push({
          id: key,
          noteTitle: noteTitle,
          noteContent: noteContent,
        });
      });
      this.setState({
        DataFireBase: arrayData,
      });
    });
  }

  //END  GET DATA TU DATABASE
  getData = () => {
    // console.log(this.state.DataFireBase);
    if (this.state.DataFireBase) {
      return this.state.DataFireBase.map((value, key) => {
        return (
          <NoteItem
            key={key}
            note={value}
            id={value.id}
            noteTitle={value.noteTitle}
            noteContent={value.noteContent}
          ></NoteItem>
        );
      });
    }
  };

  render() {
    return (
      <div className="col">
        <div className="accordion" id="noteList">
          {this.getData()}
        </div>
      </div>
    );
  }
}
export default NoteList;
