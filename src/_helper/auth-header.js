export function authHeader() {
    let token = JSON.parse(localStorage.getItem('token'));

    if (token && token.access_token) {
        return { "Authorization": "token " + token.access_token };
    } else {
        return {};
    }
}