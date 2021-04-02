import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from "react-bootstrap";
import ClientContoller from "../../projet/controllers/ClientController";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      Name:"",
      Email: "",
      Password: "",
    };
    this.ClientContoller = new ClientContoller();
  }
  validate() {
    let isError = false;
    const errors = {
      NameErr: "",
      EmailErr: "",
      PasswordErr: "",
    };
     const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if((this.state.Email==="")||!regex1.test(this.state.Email)){
            isError=true;
            errors.EmailErr='invalid Email'
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
        const regex3 = /^[A-Za-z]\w{4,14}$/;
        if(
          this.state.Name==="" || this.state.Name.length < 4||!regex3.test(this.state.Name)){
            isError=true;
            errors.NameErr='invalid Name';
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
      password: this.state.Password,
      name: this.state.Name
    };
    this.ClientContoller.AddClient(data).then((res) => {
      console.log("response", res);
    });
    window.location.href = "/user-pages/login-1";
    }
}

  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0 h-100">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <h1>CREATE ACCOUNT</h1>
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <Form className="pt-3">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1"  placeholder="Username"  onChange={event=>this.setState({Name:event.target.value})} />
                  </div>
                  <div style={{ color: "red" }}> {this.state.NameErr}</div>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email"  onChange={event=>this.setState({Email:event.target.value})} />
                  </div>
                  <div style={{ color: "red" }}> {this.state.EmailErr}</div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"  onChange={event=>this.setState({Password:event.target.value})} />
                  </div>
                  <div style={{ color: "red" }}> {this.state.PasswordErr}</div>
                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"  onClick={(evt)=>this.handleClick(evt)}>SIGN UP</div>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to='/user-pages/login' className="text-primary">Login</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
