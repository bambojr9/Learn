import React, { Component } from "react";

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userEditObject.id,
      name: this.props.userEditObject.name,
      tel: this.props.userEditObject.tel,
      permission: this.props.userEditObject.permission
    };
  }

  isChangeEditUser = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };
  saveChangeEditUser = () => {
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.permission = this.state.permission;
    // console.log("INFO la" + info.name);
    this.props.getEditform(info);
    this.props.changeEditUserStatus();
  };
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card border-primary">
            <div className="card-body text-primary bg-warning">
              <label> User Name </label>{" "}
              <form action="">
                <div className="form-group">
                  <input
                    onChange={(event) => this.isChangeEditUser(event)}
                    defaultValue={this.props.userEditObject.name}
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                  />
                </div>{" "}
                <div className="form-group">
                  <input
                    onChange={(event) => this.isChangeEditUser(event)}
                    defaultValue={this.props.userEditObject.tel}
                    name="tel"
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>{" "}
                <div className="form-group">
                  <select
                    onChange={(event) => this.isChangeEditUser(event)}
                    defaultValue={this.props.userEditObject.permission}
                    name="permission"
                    className="custom-select"
                  >
                    <option> Chon Quyen Mac Dinh </option>{" "}
                    <option value={1}> Admin </option>{" "}
                    <option value={2}> Moderator </option>{" "}
                    <option value={3}> Normal </option>{" "}
                  </select>{" "}
                </div>{" "}
                <div className="form-group">
                  <input
                    value="Save"
                    type="reset"
                    className="btn btn-block btn-primary"
                    onClick={() => this.saveChangeEditUser()}
                  />{" "}
                </div>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
