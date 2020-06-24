import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../_action';
import { SimpleHeader, SimpleFooter } from '../_component';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.logout();
        this.state = {
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        this.props.login();
    }

    render() {
        const { loggingIn } = this.props;
        return (
          <div className="logged-out env-production page-responsive session-authentication height-100">
              <SimpleHeader/>

              <div className="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled=""
                   data-issue-and-pr-hovercards-enabled="">
                  <main id="js-pjax-container" data-pjax-container="">
                      <div className="auth-form px-3" id="login">
                          <form onSubmit={this.handleSubmit}>
                              <div className="auth-form-header p-0">
                                  <h1>Sign in with GitHub</h1>
                              </div>

                              <div className="auth-form-body mt-3">
                                  <input type="submit" name="commit" value="Sign in"
                                         tabIndex="3"
                                         className="btn btn-primary btn-block"
                                         data-disable-with="Signing in…"/>
                                  {loggingIn &&
                                  <div className="container clearfix width-full text-center mt-3">
                                      <img alt=''
                                           src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                                  </div>
                                  }
                              </div>
                          </form>
                          <p className="create-account-callout mt-3">
                              Sign in with GitLab coming soon...
                          </p>
                      </div>

                  </main>
              </div>

              <SimpleFooter/>
          </div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.oauth,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };