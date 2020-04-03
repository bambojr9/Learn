import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import TableData from "./Components/TableData";
import AddUser from "./Components/AddUser";
import DataUser from "./Components/Data.json";
import uuid from "react-uuid";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Trangthaiketnoi: true,
      Data: [],
      textsearch: "",
      editUserStatus: false,
      userEditObject: {}
    };
  }

  getTextSearch = (dulieu) => {
    this.setState({
      textsearch: dulieu
    });
    // console.log('Value nhan duoctu search la : '+ this.state.textsearch)
  };
  thaydoitrangthai = () => {
    this.setState({
      Trangthaiketnoi: !this.state.Trangthaiketnoi
    });
  };

  getNewUserData = (name, tel, permission) => {
    var item = {};
    item.id = uuid();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var DATA_JSON = this.state.Data;
    DATA_JSON.push(item);
    this.setState({
      Data: DATA_JSON
    });
    localStorage.setItem("DataLocal", JSON.stringify(DATA_JSON));
    console.log(DATA_JSON);
  };

  editUser = (user) => {
    this.setState({
      userEditObject: user
    });

    console.log(" Da ket noi edit r");
    console.log(user);
  };
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  };
  getEditformApp = (info) => {
    console.log("ten Edit la : " + info.name);
    this.state.Data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
    localStorage.setItem("DataLocal", JSON.stringify(this.state.Data));
  };

  deleteUserApp = (idUser) => {
    // console.log(idUser);
    var tempData = this.state.Data;
    tempData = tempData.filter((item) => item.id !== idUser);
    this.setState({
      Data: tempData
    });
    localStorage.setItem("DataLocal", JSON.stringify(tempData));

    console.log(tempData);
  };

  componentDidMount() {
    if (localStorage.getItem("DataLocal") === null) {
      localStorage.setItem("DataLocal", JSON.stringify(DataUser)); //set stringify
    } else {
      var tempDataLocal = JSON.parse(localStorage.getItem("DataLocal")); //set array
      this.setState({
        Data: tempDataLocal
      });
    }
  }

  render() {
    let result = [];
    this.state.Data.forEach((item) => {
      if (item.name.indexOf(this.state.textsearch) !== -1) {
        result.push(item);
      }
    });
    // console.log(result);

    // console.log(this.state.Data);
    return (
      <div className="App">
        <Header> </Header>{" "}
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getEditformApp={(info) => this.getEditformApp(info)}
                editUserStatus={this.state.editUserStatus}
                CheckConnect={(dulieu) => this.getTextSearch(dulieu)}
                Trangthaiketnoi={this.state.Trangthaiketnoi}
                thaydoitrangthai={() => this.thaydoitrangthai()}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                userEditObject={this.state.userEditObject}
              ></Search>{" "}
              <TableData
                deleteUserApp={(idUser) => this.deleteUserApp(idUser)}
                editFunc={(user) => this.editUser(user)}
                Data={result}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              ></TableData>{" "}
              <AddUser
                AddUser={(name, tel, permission) => {
                  this.getNewUserData(name, tel, permission);
                }}
                Trangthaiketnoi={this.state.Trangthaiketnoi}
              ></AddUser>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
