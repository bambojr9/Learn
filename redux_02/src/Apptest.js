import React, { Component } from "react";
import { connect } from "react-redux";

class Apptest extends Component {
  // userEditStatusinStore = () => {
  //   var { dispatch } = this.props;
  //   dispatch({ type: "CHANGE_EDIT_STATUS" });
  // };
  render() {
    return (
      <div>
        <h1> Component Test </h1>
        <button onClick={() => this.props.userEditStatusinStore()}>
          Click de {this.props.getNumb}{" "}
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    getEditStatus: state.editStatus,
    getNumb: state.num
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userEditStatusinStore: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Apptest);
