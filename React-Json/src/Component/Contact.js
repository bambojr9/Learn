import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
      fDay: "thu 7"
    };
  }

  isFileChange = (event) => {
    const fFile = event.target.files;
    console.log(fFile);
  };

  isChange = (event) => {
    const target = event.target;
    const isName = target.name;
    const isValue = target.value;
    this.setState({
      [isName]: isValue
    });
  };
  getForm = () => {
    let Content = "";
    Content += "Ten nhan duoc la :" + this.state.fName;
    Content += "\nEmail nhan duoc la : " + this.state.fEmail;
    Content += "\nPhone nhan duoc la : " + this.state.fPhone;
    Content += "\nMessenger nhan duoc la : " + this.state.fMess;
    Content += "\nDay nhan duoc la : " + this.state.fDay;
    return Content;
  };
  // click submit -> Redirect to Home
  submitForm = (event) => {
    event.preventDefault();
    this.setState({
      isRedirect: true
    });
  };
  render() {
    if (this.state.isRedirect === true) {
      console.log(this.getForm());
      return <Redirect to="/">;</Redirect>;
    }
    return (
      <div>
        <div>
          <div className="page-title ">
            <div className="container">
              <div className="page-title__content text-center">
                <h2 className="wow shake">Contact</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <p className="text-center mt-2" style={{ fontSize: "2.3rem" }}>
                  Contact
                </p>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Name</label>
                      <input
                        name="fName"
                        onChange={(event) => this.isChange(event)}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="name"
                        required
                        data-validation-required-message="Please enter your name."
                        aria-invalid="false"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Email Address</label>
                      <input
                        name="fEmail"
                        onChange={(event) => this.isChange(event)}
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        id="email"
                        required
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group col-xs-12 floating-label-form-group controls">
                      <label>Phone Number</label>
                      <input
                        name="fPhone"
                        onChange={(event) => this.isChange(event)}
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                        id="phone"
                        required
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Message</label>
                      <textarea
                        name="fMess"
                        onChange={(event) => this.isChange(event)}
                        rows={5}
                        className="form-control"
                        placeholder="Message"
                        id="message"
                        required
                        data-validation-required-message="Please enter a message."
                        defaultValue={""}
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>Day</label>
                      <select
                        value={this.state.fDay}
                        className="form-control"
                        name="fDay"
                        onChange={(event) => this.isChange(event)}
                      >
                        <option value="thu 3"> Ngay thu 3</option>
                        <option value="thu 5"> Ngay thu 5</option>
                        <option value="thu 7"> Ngay thu 7</option>
                        <option value="chu nhat"> Ngay Chu Nhat</option>
                      </select>
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <br />
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                      <label>File</label>
                      <input
                        type="file"
                        onChange={(event) => this.isFileChange(event)}
                        className="form-control-file"
                        name="fFile"
                      />

                      <p className="help-block text-danger" />
                    </div>
                  </div>

                  <div id="success" />
                  <div className="form-group">
                    <button
                      type="submit"
                      onClick={(event) => this.submitForm(event)}
                      className="btn btn-primary"
                      id="sendMessageButton"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
