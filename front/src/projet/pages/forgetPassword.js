import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Input } from "reactstrap";
import ClientContoller from "../controllers/ClientController";

export class ResetPssword extends Component {
  constructor() {
    super();
    this.state = {
      Email: "",
    };
    this.ClientContoller = new ClientContoller();
  }
  validate() {
    let isError = false;
    const errors = {
      EmailErr: "",
    };
    const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.Email === "" || !regex1.test(this.state.Email)) {
      isError = true;
      errors.EmailErr = "invalid Email";
    }
    this.setState({
      ...errors,
      ...isError,
    });
    return isError;
  }
  handleClick(evt) {
    evt.preventDefault();
    let err = this.validate();
    if (!err) {
      let data = {
        email: this.state.Email,
      };
      this.ClientContoller.ForgetPass(data).then((res) => {
        console.log("response", res);
        localStorage.setItem('token',res.data.token)
      });
      /* window.location.href = "/dashboard"; */
    } else {
      ///  alert(err);
    }
  }
    /*  resetPassword () {
      const data = {
        resetLink:localStorage.getItem('token'),
        newPass: this.state.newPass,
      };
      ClientContoller.resetPssword(data)

        .then((res) => {
          console.log(res);
         
        })
        .catch((error) => {
          console.log(error);
        });
    }; */
  
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <h2>RESET PASSWORD</h2>
                </div>
                <h4>please enter your new password</h4>

                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      bsSize="lg"
                      className="h-auto"
                      onChange={(event) =>
                        this.setState({ Email: event.target.value })
                      }
                    />
                    <br />
                    <div style={{ color: "red" }}>{this.state.EmailErr}</div>
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
                        CONFIRMATION
                      </div>
                    </div>
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

export default ResetPssword;
