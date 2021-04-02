import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
//import DatePicker from "react-datepicker"//
import bsCustomFileInput from 'bs-custom-file-input';

export class Addanalyses extends Component {
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
          <h3 className="page-title"> Ajout Analyse </h3>
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
                    <label htmlFor="exampleInputUsername1">Identifiant du patient</label>
                    <Form.Control type="text" id="exampleInputUsername1" placeholder="Username" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Nom patient</label>
                    <Form.Control type="text" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                  </Form.Group>
                  <Form.Group>
                  <label htmlFor="exampleInputEmail1">prenom patient</label>
                    <Form.Control type="text" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                  </Form.Group>
                  <Form.Group>
                  <label htmlFor="exampleInputEmail1">Nom de votre regime</label>
                    <Form.Control type="text" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                  </Form.Group>
                  <Form.Group>
                  <label htmlFor="exampleInputEmail1">age</label>
                    <Form.Control type="" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                  </Form.Group>
                  <Form.Group>
                  <label htmlFor="exampleInputEmail1">telephone</label>
                    <Form.Control type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                  </Form.Group>
                
                 
                  <Form.Group>
                  <label htmlFor="exampleInputEmail1">maladie</label>
                    <Form.Control type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                  </Form.Group>
                  
                  <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">sex</label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Homme</option>
                            <option>Femme</option>
                          </select>
                        </div>
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
export default Addanalyses