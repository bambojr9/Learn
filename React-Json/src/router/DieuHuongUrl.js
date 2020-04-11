import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Component/Home";
import News from "../Component/News";
import NewsDetail from "../Component/NewsDetail";
import Contact from "../Component/Contact";
export default class DieuHuongUrl extends Component {
  render() {
    return (
      <div>
        <Route exact path="/Home" component={Home}></Route>{" "}
        <Route exact path="/tin" component={News}></Route>{" "}
        <Route
          path="/tin-tuc-chi-tiet/:slug.:id.html"
          component={NewsDetail}
        ></Route>{" "}
        {/* <Route path="/tin-tuc/" component={NewsDetail}>
                          </Route> */}{" "}
        <Route path="/lien-he" component={Contact}></Route>{" "}
      </div>
    );
  }
}
