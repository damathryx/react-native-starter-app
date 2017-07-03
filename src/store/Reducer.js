import * as Action from 'constants/actionTypes';
import Config from 'react-native-config';

export const initialState = {
    loading: false,
    loggedIn: false,
    hasInternet: true,
    baseUrl: Config.DEFAULT_APP_URL
};

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Action.LOGIN: {
            return Object.assign({}, state, {
                loggedIn: true,
            });
        }
    }
}