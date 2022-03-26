import React , { useState} from "react";
import { View, Image, Text, StyleSheet } from 'react-native';
import Button from "./Button";
import * as ImagePicker from 'expo-image-picker';
import Colors from "../constants/Colors";

function ImageSelector(){
    const [pickedUri, setPickedUri] = useState()

    const handleTakeImage = () => {

    }
    return (
        <View>
            <View>
                {!pickedUri
                ? <Text> No hay imagen...</Text>
                : <Image source={{uri: pickedUri}} />
                }
            </View>
            <Button 
                title = "Tomar foto"
                onPress={handleTakeImage}
            />
        </View>
    )
}

export default ImageSelector