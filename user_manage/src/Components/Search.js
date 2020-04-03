import React, { Component } from "react";
import EditUser from "./EditUser";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempvalue: "",
      userObj: ""
    };
  }

  isChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      tempvalue: event.target.value
    });
    this.props.CheckConnect(this.state.tempvalue);
  };
  showbtn = () => {
    if (this.props.Trangthaiketnoi === true) {
      return (
        <div
          className="btn-block btn btn-outline-secondary"
          onClick={() => this.props.thaydoitrangthai()}
        >
          Dong Lai{" "}
        </div>
      );
    } else {
      return (
        <div
          className="btn btn-outline-info btn-block "
          onClick={() => this.props.thaydoitrangthai()}
        >
          Them Moi{" "}
        </div>
      );
    }
  };
  getEditform = (info) => {
    this.setState({
      userObj: info
    });
    this.props.getEditformApp(info);
    // console.log(info);
  };
  showEditForm = () => {
    if (this.props.editUserStatus === true) {
      return (
        <EditUser
          getEditform={(info) => this.getEditform(info)}
          changeEditUserStatus={() => this.props.changeEditUserStatus()}
          userEditObject={this.props.userEditObject}
        ></EditUser>
      );
    }
  };

  render() {
    return (
      <div className="col-md-12">
        {" "}
        {this.showEditForm()}{" "}
        <div className="col-md-12">
          <div className="form-group">
            <div className="btn-group">
              <input
                onChange={(event) => this.isChange(event)}
                name="fSearch"
                type="text"
                className="form-control"
                placeholder=" Nhap tu khoa"
              />
              <div
                className="btn btn-info"
                onClick={(dulieu) =>
                  this.props.CheckConnect(this.state.tempvalue)
                }
              >
                Search{" "}
              </div>{" "}
            </div>{" "}
            <div className="btn-group1 mt-2"> {this.showbtn()} </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="col-md-12">
          <hr />
        </div>{" "}
      </div>
    );
  }
}
