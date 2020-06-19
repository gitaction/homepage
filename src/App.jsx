import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './_helper';
import { alertActions } from './_action';
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';
import About from './About';
import { PrivateRoute } from './_component';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RedirectPage } from './RedirectPage';
import { RegisterPage } from './RegisterPage';

const {
  REACT_APP_COMPONENT_HOST: componentHost,
} = process.env;

const Component = ({ history }) => (
  <MicroFrontend history={history} host={componentHost} name="Component" />
);

class App extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const {alert} = this.props;
    return (
      <div className="">
        {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
        <BrowserRouter>
          <React.Fragment>
            <AppHeader/>
            <Switch>
              <PrivateRoute exact path="/" component={Component}/>
              <Route exact path="/about" render={About}/>
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/home" component={HomePage} />
              <Route path="/oauth/redirect" component={RedirectPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}


function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };