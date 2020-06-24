import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../_action';
import { SimpleHeader, SimpleFooter } from '../_component';

class RedirectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false
        };

        this.props.request();
        
        let url = new URL(window.location.href);
        let code = url.searchParams.get("code");
        let state = url.searchParams.get("state");
        
        this.props.login(code, state);
    }

    render() {
        const { loggingIn, loggedIn } = this.props;
        return (
          <div className="logged-out env-production page-responsive session-authentication height-100">
              <SimpleHeader/>

              <div className="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled=""
                   data-issue-and-pr-hovercards-enabled="">
                  <main id="js-pjax-container" data-pjax-container="">
                      <div className="auth-form px-3" id="login">
                          <div className="auth-form-header p-0">
                              <h1>Logging into GitAction...</h1>
                          </div>
                          <p className="create-account-callout mt-3">
                              {loggingIn &&
                              <div className="container clearfix width-full text-center mt-3">
                                  <img alt=''
                                       src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                              </div>
                              }
                              {
                                  loggedIn && window.location.replace('/')
                                  // loggedIn && this.props.history.push('/')
                              }
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
    const { loggingIn, loggedIn } = state.authentication;
    return { loggingIn, loggedIn };
}

const actionCreators = {
    login: userActions.login,
    request: userActions.request
};

const connectedRedirectPage = connect(mapState, actionCreators)(RedirectPage);
export { connectedRedirectPage as RedirectPage };