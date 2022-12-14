import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'my-network/auth/SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });

export const getAuthUserData = () => async (dispath) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispath(setAuthUserData(id, email, login, true));
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispath(stopSubmit('login', { _error: message }));
    }
}

export const login = (email, password, rememberMe) => async (dispath) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispath(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispath(stopSubmit('login', { _error: message }));
    }
}

export const logout = () => async (dispath) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispath(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;