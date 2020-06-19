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

    let headers = new Headers();

    headers.append('Content-Type', 'application/json;charset=UTF-8');
    
    const requestOptions = {
        method: 'POST',
        headers: headers,
        mode:'cors',
        body: JSON.stringify(form)
    };
    
    // (async () => {
    //     const rawResponse = await fetch('https://github.com/login/oauth/access_token', {
    //         method: 'POST',
    //         headers: headers,
    //         mode:'no-cors',
    //         credentials: 'include',
    //         body: JSON.stringify(form)
    //     });
    //     const content = await rawResponse.json();
    //
    //     console.log(content);
    // })();

    return fetch(`${github_org}/login/oauth/access_token`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
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
    console.log("---");
    console.log(response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}