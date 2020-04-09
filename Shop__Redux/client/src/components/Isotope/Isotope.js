import React, { Component } from "react";

export default class Isotope extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="controls text-center">
              <button
                type="button"
                className="btn btn-success control btn-sm"
                data-filter=".a"
              >
                A
              </button>
              <button
                type="button"
                className="btn btn-primary control btn-sm"
                data-filter=".b"
              >
                B
              </button>
              <button
                type="button"
                className="btn btn-warning control btn-sm"
                data-filter=".c"
              >
                C
              </button>
              <button
                type="button"
                className="btn btn-danger control btn-sm"
                data-filter="*"
              >
                All
              </button>
            </div>
          </div>
          <hr />
        </div>
        <div className="gallery row">
          <div
            className=" mix a"
            style={{
              backgroundColor: "green",
              height: "20px",
              width: "70px",
            }}
          />
          <div
            className=" mix c"
            style={{
              backgroundColor: "orange",
              height: "20px",
              width: "70px",
            }}
          />
          <div
            className=" mix a"
            style={{
              backgroundColor: "green",
              height: "20px",
              width: "70px",
            }}
          />
          <div
            className=" mix c"
            style={{
              backgroundColor: "orange",
              height: "20px",
              width: "70px",
            }}
          />
          <div
            className=" mix b"
            style={{
              backgroundColor: "skyblue",
              height: "20px",
              width: "70px",
            }}
          />
        </div>
      </div>
    );
  }
}
