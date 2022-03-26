import * as FileSystem from 'expo-file-system'

export const ADD_MY_PUB= "ADD_MY_PUB"

export const addMyPub = (title, image) => {
    return async dispatch => {

        const filename = image.split('/').pop()
        const Path = FileSystem.documentDirectory + filename
        try{
            await FileSystem.moveAsync({
                from: image,
                to: Path,
            })
            
            dispatch({
                type: ADD_MY_PUB,
                payload: {
                    title,
                    image: Path,
                }
            })
        } catch(err){
            console.log(err)
        }

        
    }
    
}