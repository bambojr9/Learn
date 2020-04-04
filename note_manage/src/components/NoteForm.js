import React, { Component } from "react";
import { connect } from "react-redux";
class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: "",
      noteContent: "",
      id: "",
    };
  }
  // on change get Value
  isChangeForm = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    // console.log(name);
    // console.log(value);
    this.setState({
      [name]: value,
    });
  };
  // Lay value  DATA tu` State
  //Start ADD DATA    --C1
  addData = (title, content) => {
    //neu state id co' -> Sua
    if (this.state.id) {
      var editObject = {};
      editObject.noteTitle = this.state.noteTitle;
      editObject.noteContent = this.state.noteContent;
      editObject.id = this.state.id;
      console.log("Loading... Day Du lieu Edit len Store");
      this.props.editDataStore(editObject);
      this.props.changeEditStatus();
    }
    //neu khong co state ID -> ADD
    else {
      var item = {};
      item.noteTitle = title;
      item.noteContent = content;
      // item.id = "";
      //c1 : Dung react thuan ADD DATA
      // console.log(item);
      // this.props.getData(item);
      //end c1 : react thuan
      //c2 : redux   Store
      // item = JSON.stringify(item);
      console.log("Loading ADD_DATA");
      this.props.addDataStore(item);
      this.props.changeEditStatus();
    }
  };
  //ktra -> Neu ton tai editItem  -->  Truyen vo state
  componentDidMount() {
    if (this.props.editItem) {
      this.setState({
        noteTitle: this.props.editItem.noteTitle,
        noteContent: this.props.editItem.noteContent,
        id: this.props.editItem.id,
      });
    }
  }
  changeTitleForm = () => {
    if (this.props.addStatus) {
      return <h4>Them moi Note</h4>;
    } else {
      return <h4>Sua Note</h4>;
    }
  };
  render() {
    //day editItem vao Form de Default INPUT TEXT
    // console.log(this.props.editItem);
    return (
      <div className="col-4">
        {this.changeTitleForm()}
        <form>
          <div className="form-group">
            <label htmlFor="noteTitle">Tieu De Note</label>
            <input
              defaultValue={this.props.editItem.noteTitle}
              onChange={(event) => this.isChangeForm(event)}
              type="text"
              className="form-control"
              name="noteTitle"
              id="noteTitle"
              aria-describedby="helpId"
              placeholder="Tieu De Note"
            />
            <small id="helpIdNoteTitle" className="form-text text-muted">
              Dien Tieu De Vao
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="noteTitle">Noi Dung Note</label>
            <textarea
              defaultValue={this.props.editItem.noteTitle}
              onChange={(event) => this.isChangeForm(event)}
              type="text"
              className="form-control"
              name="noteContent"
              id="noteTitle"
              aria-describedby="helpId"
              placeholder="Tieu De Note"
            />
            <small id="helpIdNoteTitle" className="form-text text-muted">
              Dien Tieu De Vao
            </small>
          </div>
          <button
            onClick={(title, content) =>
              this.addData(this.state.noteTitle, this.state.noteContent)
            }
            type="reset"
            className="btn btn-primary btn-block"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
//truyen tu store xuong
const mapStateToProps = (state, ownProps) => {
  return {
    editItem: state.editItem,
    addStatus: state.isAdd,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({
        type: "ADD_DATA",
        getItem,
      });
    },
    editDataStore: (getItem) => {
      dispatch({
        type: "EDIT_DATA",
        getItem,
      });
    },
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
