import React, { Component } from "react";
import "./App.css";
import Apptest from "./Apptest";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <Apptest> </Apptest>
        {this.props.getNum}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    getNum: state.num
  };
};

export default connect(mapStateToProps)(App);
