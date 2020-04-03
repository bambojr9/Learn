import React, { Component } from "react";
import { connect } from "react-redux";

class NoteItem extends Component {
  //truyen Noi dung &  change Edit Status
  twoActionbtn = () => {
    this.props.changeEditStatus();
    //Lay THUOC TINH cua phan tu CLICK  | truyen tu NoteList xuong
    // console.log(this.props.note);
    //day item len STORE
    this.props.getEditData(this.props.note);
  };
  //END truyen Noi dung
  //DELETE DATA
  deleteData = () => {
    this.props.getDeleteData(this.props.note.id);
  };
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header" id={"note1" + this.props.id}>
            <h2 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target={"#noteContent1" + this.props.id}
                aria-expanded="true"
                aria-controls={"noteContent1" + this.props.id}
              >
                {this.props.noteTitle}
              </button>
              <div className="btn-group float-right">
                <button
                  onClick={() => this.twoActionbtn()}
                  type="button"
                  className="btn btn-info"
                >
                  Sua
                </button>
                <button
                  onClick={() => this.deleteData()}
                  type="button"
                  className="btn btn-warning"
                >
                  Xoa
                </button>
              </div>
            </h2>
          </div>
          <div
            id={"noteContent1" + this.props.id}
            className="collapse show"
            aria-labelledby={"note1" + this.props.id}
            data-parent="#noteList"
          >
            <div className="card-body">{this.props.noteContent}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      });
    },
    getEditData: (editObject) => {
      dispatch({
        type: "GET_EDIT_DATA",
        editObject
      });
    },
    getDeleteData: (deleteId) => {
      dispatch({
        type: "DELETE_DATA",
        deleteId
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
