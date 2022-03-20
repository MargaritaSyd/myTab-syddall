import { API_URL } from "../../constants/dataBase"
export const GET_STOCK = "GET_STOCK"

export const getStock = () => {
    return async dispatch => {
        try { 
        
        dispatch({
            type: GET_STOCK,
            status: 'loading'
        })
            
        const response = await fetch(`${API_URL}stock.json`)

        const result = await response.json();
        console.log ('raw' , result)

        const stock = Object.keys(result).map( key => ({
            ...result[key],
            id: key,
        }))

        console.log('array' , stock)

        dispatch({
            type: GET_STOCK,
            payload: stock,
            status: 'success'
        })

        } catch(error) {
            console.log(error.message)
            dispatch({
                type: GET_STOCK,
                status: 'error'
            })
        }
    }
}
