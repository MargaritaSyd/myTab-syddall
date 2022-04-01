
import React from "react";
import {View, Image, StyleSheet} from "react-native"
import Maps from "../constants/Maps";

function MapPreview(){
    const mapPreviewUrl = ""

    return (
        <View style={[styles.mapPreview, style]}>
            {location
                ?<Image source={{uri: mapPreviewUrl }} style={styles.mapImage}/>
                : children
            }
        </View>
    )

}

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: "center",
        alignItems: "center"
    },
    mapImage: {
        width: "100%",
        height: "100%"
    }
})

export default MapPreview

