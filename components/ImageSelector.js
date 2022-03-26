import React , { useState} from "react";
import { View, Image, Text, StyleSheet, Alert } from 'react-native';
import Button from "./Button";
import * as ImagePicker from 'expo-image-picker';

import Colors from "../constants/Colors";

function ImageSelector({onImageSelected}){
    const [pickedUri, setPickedUri] = useState()
    

    const verifyPermissions = async () => {
        try{
            await ImagePicker.requestCameraPermissionsAsync()
        
       // const { granted } = ImagePicker.requestCameraPermissionsAsync
        //const { granted } = ImagePicker.requestCameraPermissionsAsync()
            if(ImagePicker.requestCameraPermissionsAsync()) {
                return true;
            }
           //console.log("error")
              Alert.alert(
                  "Permisos insuficientes, necesita otorgar permisos de la cámara"
                  [{text: "ok"}]
              )
             return false;
        } catch(err){
            console.log(err)
        }
           
      
    }

    const handleTakeImage = async () => {
        const isCameraOk = await verifyPermissions()
        if (!isCameraOk) return 

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8,
        })


        console.log(image)
        setPickedUri(image.uri)
        onImageSelected(image.uri)
    }
    return (
        <View>
            <View style={styles.imagePickerCont}>
                {!pickedUri
                ? <Text> No hay imagen...</Text>
                : <Image style={styles.image} source={{ uri: pickedUri}} />
                }
            </View>
            <Button 
                title = "Tomar foto"
                onPress={handleTakeImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    imagePickerCont: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.buttonBackGround,
        borderWidth: 1,
    }
})

export default ImageSelector