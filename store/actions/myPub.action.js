export const ADD_MY_PUB= "ADD_MY_PUB"

export const addMyPub = (title) => {
    return {type: ADD_MY_PUB, payload: {title}}
}