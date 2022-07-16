import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SACCESS = 'INITIALIZED_SACCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SACCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
}

export const initializedSaccess = () => ({ type: INITIALIZED_SACCESS });

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSaccess());
        });
}


export default appReducer;