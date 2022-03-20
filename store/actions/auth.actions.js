import { API_KEY } from "../../constants/dataBase"

export const SIGN_UP = "SIGN_UP"

export const signUp = (email, password) => {

    return async dispatch => {
       
        const response = await fetch( API_KEY, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        })
        const data = await response.json();

        dispatch({
            type: SIGN_UP,
            token: data.idToken,
            userId: data.localId,
        });
    }
}