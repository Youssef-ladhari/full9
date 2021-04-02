import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
//import Addnotes from './test/components/notes/Addnotes';

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));
const Typography = lazy(() => import("./basic-ui/Typography"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));





const resetpassword= lazy(() => import("../projet/pages/forgetPassword"));



//my components

const Addnotes = lazy(() => import("./test/components/notes/Addnotes"));
const Addfiches = lazy(() => import("./test/components/fiches/Addfiches"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />

          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />
          <Route path="/basic-ui/typography" component={Typography} />

          <Route
            path="/form-Elements/basic-elements"
            component={BasicElements}
            component={BasicElements}

          />

          <Route path="/tables/basic-table" component={BasicTable} />

          <Route path="/icons/mdi" component={Mdi} />

          <Route path="/charts/chart-js" component={ChartJs} />

          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />




          {/* my routes */}
          {/*<Route path="/ListRegime" component={ ListRegime } />  */}
          <Route path="/resetpassword" component={resetpassword } /> 
         





          <Redirect to="/user-pages/login-1" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
