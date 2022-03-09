import { API_URL } from "../../constants/dataBase"
export const CONFIRM_ADDITEM = "CONFIRM_ADDITEM"

export const confirmAddItem = (itemToAdd) => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}stock.json` , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: itemToAdd,
                })
            })
            const result = await response.json();

            dispatch({
                type: CONFIRM_ADDITEM,
                confirm: true,
            })
        } catch (error) {
            console.log(error.message)
            dispatch({
                type: CONFIRM_ADDITEM,
                confirm: false,
                error: error.message
            })
        }
    }
} 