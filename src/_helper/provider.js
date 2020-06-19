const {
    REACT_APP_OAUTH_GITHUB_ORG: github_org,
    REACT_APP_OAUTH_GITHUB_CLIENT_ID: client_id,
    REACT_APP_OAUTH_GITHUB_CLIENT_SECRET: client_secret,
    REACT_APP_OAUTH_GITHUB_SCOPES: scopes,
    REACT_APP_OAUTH_GITHUB_REDIRECT_URI: redirect_uri
} = process.env;

let state = uuid();

function uuid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }

    return s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' +
      s4() + '_' + s4() + '_' + s4() + '_' + s4() + '_' +
      s4() + '_' + s4() + '_' + s4()
}

function buildAuthorizeUrl() {
    localStorage.setItem("state", state);
    return github_org + '/login/oauth/authorize?' +
      'client_id=' + client_id + '&' +
      'scope=' + scopes + '&' +
      'redirect_uri=' + redirect_uri + '&' +
      'state=' + state;
}

export function getAuthorizationUrl() {
    return buildAuthorizeUrl();
}