import { authHeader } from '../_helper';

const {
    REACT_APP_OAUTH_GITHUB_ORG: github_org,
    REACT_APP_OAUTH_GITHUB_CLIENT_ID: client_id,
    REACT_APP_OAUTH_GITHUB_CLIENT_SECRET: client_secret,
    REACT_APP_OAUTH_GITHUB_REDIRECT_URI: redirect_uri
} = process.env;

export const userService = {
    
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username, password) {
    let form = {
        redirect_uri: redirect_uri,
        client_id: client_id,
        client_secret: client_secret,
        code: username,
        state: password
    };

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(form),
        redirect: 'follow'
    };

    return fetch("https://us-central1-gitaction.cloudfunctions.net/oauthToken", requestOptions)
      .then(handleResponse)
      .then(user => {
          localStorage.setItem('user', JSON.stringify(user));
          return user;
      })
      .catch(error => console.log('error', error));
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${github_org}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${github_org}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${github_org}/users/register`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${github_org}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${github_org}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.json().then(json => {
        const data = json;
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}