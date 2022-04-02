import React , { useState} from "react";
import { View, Image, Text, StyleSheet, Alert } from 'react-native';
import Button from "./Button";
import * as Location from 'expo-location';
import MapPreview from "../components/MapPreview";
import Colors from "../constants/Colors";
import Typography from "../constants/Typography";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function LocationSelector({onLocationSelected}){
    const [pickedLocation, setPickedLocation] = useState()
    

    const verifyPermissions = async () => {
        try{
            await Location.requestForegroundPermissionsAsync()
          // const { status } = Location.requestForgroundPermissionsAsync()
            if(Location.requestForegroundPermissionsAsync()) {
                return true;
            }
              Alert.alert(
                  "Permisos insuficientes, necesita otorgar permisos de ubicación"
                  [{text: "ok"}]
              )
             return false;
        } catch(err){
            console.log(err)
        }
           
      
    }

    const handleGetLocation = async () => {
        const isLocationOk = await verifyPermissions()
        if (!isLocationOk) return 

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
        })


        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        })
        onLocationSelected({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        })
    }
    return (
        <View>
            <View style={styles.LocationPickerCont}>
            <MapPreview location={pickedLocation}>
            <Text style={styles.textLocation}> Estamos buscando tu ubicación...</Text>
            </MapPreview>  
             
            </View>
            <Button 
                title = "Obtener ubicación"
                onPress={handleGetLocation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    location: {
        width: '100%',
        height: '100%'
    },
    locationPickerCont: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.buttonBackGround,
        borderWidth: 1,
    },
    textLocation: {
        fontFamily: Typography.titleFont,
        fontSize: 20,
        color: Colors.primary
    }
})

export default LocationSelector