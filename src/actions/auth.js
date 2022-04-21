import { firebase, googleAuhtProvider } from "../firebase/firebase-config";
import Swal from 'sweetalert2';

import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startLoginWithEmailAndPassword = (email, passwrod) => {
    return (dispatch) => {

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, passwrod)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(e => {
                dispatch(finishLoading());
                Swal.fire('Error', e.message, 'error');
            });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuhtProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            });
    }
}

export const startRegisterWithEmailAndPassword = (email, password, name) => {
    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(e => {
                dispatch(finishLoading());
                Swal.fire('Error', e.message, 'error');
            });
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const logout = () => ({
    type: types.logout
})