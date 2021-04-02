import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Facebook from "../../projet/pages/facebook";
import { Button, Input } from "reactstrap";
import ClientContoller from "../../projet/controllers/ClientController";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      Email: "",
      Password: "",
      authErr: "",
    };
    this.ClientContoller = new ClientContoller();
  }
  validate() {
    let isError = false;
    const errors = {
      EmailErr: "",
      PasswordErr: "",
    };
    const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.Email === "" || !regex1.test(this.state.Email)) {
      isError = true;
      errors.EmailErr = "invalid Email";
    }
    const regex2 = /^[A-Za-z0-9]\w{4,14}$/;
    if (
      this.state.Password === "" ||
      this.state.Password.length < 4 ||
      !regex2.test(this.state.Password)
    ) {
      isError = true;
      errors.PasswordErr = "invalid Password";
    }
    this.setState({
      ...errors,
      ...isError,
    });
    return isError;
  }
  RestClick(evt) {
    evt.preventDefault();
    this.ClientContoller.ForgetPass().then((res) => {
      console.log("response", res);
    });
    window.location.href = "/resetpassword";
  }
  handleClick(evt) {
    evt.preventDefault();
    let err = this.validate();
    if (!err) {
      let data = {
        email: this.state.Email,
        password: this.state.Password,
      };
      console.log("data login", data);
      this.ClientContoller.authentificate(data)
        .then((res) => {
          console.log("responseLogin", res);
          if ((res.data.status = "success")) {
            this.props.history.push("/dashboard");
          } else {
            this.setState({ authErr: "please verify your email and password" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <h2>LogIn</h2>
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Input
                      type="email"
                      placeholder="Email"
                      bsSize="lg"
                      className="email"
                      onChange={(event) =>
                        this.setState({ Email: event.target.value })
                      }
                    />
                    <br />
                    <div style={{ color: "red" }}> {this.state.EmailErr}</div>
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Input
                      type="password"
                      placeholder="Password"
                      bsSize="lg"
                      className="h-auto"
                      onChange={(event) =>
                        this.setState({ Password: event.target.value })
                      }
                    />
                    <br />
                    <div style={{ color: "red" }}>{this.state.PasswordErr}</div>
                  </Form.Group>
                  <div
                    className="mt-3"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div className="mt-3">
                      <div
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        onClick={(evt) => this.handleClick(evt)}
                      >
                        SIGN IN
                      </div>
                    </div>
                  </div>
                  <br />
                  <div style={{ color: "red" }}> {this.state.authErr}</div>

                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a
                      href="/resetpassword"
                      className="auth-link text-muted"
                      onClick={(evt) => this.ResetClick(evt)}
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mb-2">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/*   <Facebook /> */}
                    </div>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{" "}
                    <Link to="/user-pages/register-1" className="text-primary">
                      Create
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
