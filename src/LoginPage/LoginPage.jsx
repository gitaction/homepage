import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../_action';
import { getAuthorizationUrl } from '../_helper';


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
              <div className="position-relative js-header-wrapper ">
                  <div className="header header-logged-out width-full pt-5 pb-4" role="banner">
                      <div className="container clearfix width-full text-center">
                          <a className="header-logo" href="https://gitactino.com/" aria-label="Homepage"
                             data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
                              <svg height="48" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1"
                                   width="48" aria-hidden="true">
                                  <path fill-rule="evenodd"
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                              </svg>
                          </a>
                      </div>
                  </div>
              </div>

              <div className="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="">
                  <main id="js-pjax-container" data-pjax-container="">
                      <div className="auth-form px-3" id="login">
                          <form onSubmit={this.handleSubmit}>
                              <input type="hidden" name="ga_id" className="js-octo-ga-id-input" value="832245469.1592969851" />
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

              <div className="footer container-lg p-responsive py-6 mt-6 f6" role="contentinfo">
                  <ul className="list-style-none d-flex flex-justify-center">
                      <li><a className="link-gray" data-ga-click="Footer, go to contact, text:contact"
                             href="https://github.com/contact">Contact GitAction</a></li>
                  </ul>
              </div>

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