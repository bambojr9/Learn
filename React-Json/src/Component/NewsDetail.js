import React, { Component } from "react";
import dulieujson from "./dulieu.json";
import NewsRelated from "./NewsRelated";
export default class NewsDetail extends Component {
  render() {
    let count = 1;
    // console.log(this.props);     in ra tat ca cac props cua component nay
    console.log(this.props.match.params.id);
    return (
      <div>
        <div>
          <div className="page-title ">
            <div className="container">
              <div className="page-title__content text-center">
                <h2 className="wow shake">Tin Chi Tiet</h2>
              </div>
            </div>
          </div>

          {dulieujson.map((value) => {
            if (value.id === parseInt(this.props.match.params.id)) {
              return (
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <img
                      src={value.anh}
                      alt=""
                      className="img-fluid width100"
                    />
                    <h3
                      className="text-center mt-4 mb-5"
                      style={{ fontSize: "2rem" }}
                    >
                      {value.tieuDe}
                    </h3>
                    <p>{value.noiDung}</p>
                  </div>
                </div>
              );
            }
          })}

          <div className="container">
            <div className="card border-primary">
              <div className="card-body">
                <h4 className="card-title text-center mt-2">tin lien quan</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card-deck">
                  {dulieujson.map((value, key) => {
                    if (value.id !== parseInt(this.props.match.params.id)) {
                      if (count <= 4) {
                        count++;
                        return (
                          <NewsRelated
                            key={key}
                            id={value.id}
                            anh={value.anh}
                            tieuDe={value.tieuDe}
                            trichDan={value.trichDan}
                            noiDung={value.noiDung}
                          ></NewsRelated>
                        );
                      }
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
