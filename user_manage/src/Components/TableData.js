import React, { Component } from "react";
import TableDataRow from "./TableDataRow";

export default class TableData extends Component {
  deleteUser = (idUser) => {
    this.props.deleteUserApp(idUser);
  };
  mappingData = () =>
    this.props.Data.map((value, key) => (
      <TableDataRow
        deleteUser={(idUser) => this.deleteUser(idUser)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        editFunClick={(user) => this.props.editFunc(value)}
        key={key}
        stt={key}
        id={value.id}
        name={value.name}
        tel={value.tel}
        permission={value.permission}
      ></TableDataRow>
    ));

  render() {
    return (
      <div className="col-md">
        <table className="table table-striped ">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Ten</th>
              <th>Dien Thoai</th>
              <th>Phan Quyen</th>
              <th>Thao Tac</th>
            </tr>
          </thead>
          <tbody>{this.mappingData()}</tbody>
        </table>
      </div>
    );
  }
}
