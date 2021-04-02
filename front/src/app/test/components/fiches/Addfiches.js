import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
//import DatePicker from "react-datepicker"//
import bsCustomFileInput from 'bs-custom-file-input';

export class Addfiches extends Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  componentDidMount() {
    bsCustomFileInput.init()
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Ajout fiches </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Forms</a></li>
              <li className="breadcrumb-item active" aria-current="page">Form elements</li>
            </ol>
          </nav>
        </div>
       
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Default form</h4>
                <p className="card-description"> Basic form layout </p>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Identifiant de votre fiche</label>
                    <Form.Control type="text" id="exampleInputUsername1" placeholder="Identifiant de votre fiche" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Nom patient</label>
                    <Form.Control type="text" className="form-control" id="exampleInputEmail1" placeholder="Nom patient" />
                  </Form.Group>
                  <Form.Group>
                  <label htmlFor="exampleInputEmail1">Prenom patient</label>
                    <Form.Control type="text" className="form-control" id="exampleInputEmail1" placeholder="Prenom patient" />
                  </Form.Group>
                  <Form.Group>
                  <label htmlFor="exampleInputEmail1">Detail</label>
                    <Form.Control type="text" className="form-control" id="exampleInputEmail1" placeholder="Detail" />
                  </Form.Group>
                  <Form.Group>
                  <label htmlFor="exampleInputEmail1">Patient</label>
                    <Form.Control type="text" className="form-control" id="exampleInputEmail1" placeholder="Patient" />
                  </Form.Group>
                  
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button>
               
              </form>
              </div>
            </div>
          </div>

</div>
  
    )
  }
}
export default Addfiches