import React, { Component } from "react";

export default class TableDataRow extends Component {
  permission = () => {
    if (this.props.permission === "1") {
      return "Admin";
    }
    if (this.props.permission === "2") {
      return "Moderator";
    }
    if (this.props.permission === "3") {
      return "Normal User";
    }
  };

  editClick = () => {
    this.props.editFunClick();
    this.props.changeEditUserStatus();
  };

  //remove
  deleteUser = (idUser) => {
    this.props.deleteUser(idUser);
    // console.log(" ID của phan tu la : " + idUser);
  };

  render() {
    return (
      <tr>
        <td>{this.props.stt + 1}</td>
        <td>{this.props.name}</td>
        <td>{this.props.tel}</td>
        <td>{this.permission()}</td>
        <td>
          <div onClick={this.editClick} className="btn btn-warning edit">
            Edit
          </div>
          <div
            onClick={(idUser) => this.deleteUser(this.props.id)}
            className="btn btn-danger delete"
          >
            Remove
          </div>
        </td>
      </tr>
    );
  }
}
