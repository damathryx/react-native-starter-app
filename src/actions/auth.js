import * as Action from 'constants/actionTypes';

export function login() {
    return ({
        type: Action.LOGIN,
    });
}

export function logout() {
    return ({
        type: Action.LOGOUT,
    });
}