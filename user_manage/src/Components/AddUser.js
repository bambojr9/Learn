import React, { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      permission: ""
    };
  }

  isChangeUser = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
    //package to item
    var item = {};
    item.id = this.state.id;
    item.name = this.state.name;
    item.tel = this.state.tel;
    item.permission = this.state.permission;
  };

  showAddUser = () => {
    if (this.props.Trangthaiketnoi === true) {
      return (
        <div className="card border-primary">
          <div className="card-body text-primary">
            <label>User Name</label>
            <form action="">
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  onChange={(event) => this.isChangeUser(event)}
                  className="form-control"
                  placeholder="User Name"
                />
              </div>
              <div className="form-group">
                <input
                  name="tel"
                  type="text"
                  onChange={(event) => this.isChangeUser(event)}
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group">
                <select
                  name="permission"
                  onChange={(event) => this.isChangeUser(event)}
                  className="custom-select"
                >
                  <option>Chon Quyen Mac Dinh</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  value="Add"
                  type="reset"
                  className="btn btn-block btn-primary"
                  onClick={(name, tel, permission) =>
                    this.props.AddUser(
                      this.state.name,
                      this.state.tel,
                      this.state.permission
                    )
                  }
                />
              </div>
            </form>
          </div>
        </div>
      );
    }
  };

  render() {
    // console.log(this.state);
    return <div>{this.showAddUser()}</div>;
  }
}
