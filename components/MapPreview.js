
import React from "react";
import {View, Image, StyleSheet} from "react-native"
import MAP from "../constants/Maps";

function MapPreview(location, style, children){
    const mapPreviewUrl = location
    ? `https://maps.googleapi.com/maps/api/statismap?center=${location.lat}${location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${location.lat},${location.lng}&key=${MAP}`
    : ""
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

