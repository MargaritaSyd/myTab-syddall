import React, {useState} from "react";

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import Colors from "../constants/Colors";
import Typography from "../constants/Typography";
import Button from "../components/Button";
import Input from "../components/Input";
import { addMyPub } from "../store/actions/myPub.action";
import ImageSelector from "../components/ImageSelector";
import LocationSelector from "../components/LocationSelector";




function MyPub({navigation}){
    const dispatch = useDispatch()
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [location, setLocation] = useState()

    const handleSavePub = () => {
        dispatch(addMyPub(title,image))
        navigation.navigate('Home') //navigation.push("Home") podría volver atrás
    }
   
    
        return(
            <ScrollView>
                <View style={styles.containerHome}>
                    <Text style={styles.textStyle}> Titulo: </Text>
                    <Input style={styles.textStyle}>
                        value={title}
                        onChangeText={setTitle}
                    </Input>
                    <ImageSelector onImageSelected={setImage}/>
                    <LocationSelector onLocationSelected={setLocation}/>
                    <Button
                        title= "Guardar"
                        onPress={handleSavePub}
                    />
                </View>
            </ScrollView>
        )
}

const styles = StyleSheet.create({
    containerHome: {
      padding:30,
      backgroundColor: Colors.backGround,
      flex: 1
    },
    textStyle: {
        fontFamily: Typography.titleFont,
        fontSize: 24,
        color: Colors.primary
    }
    
    
})
  



export default MyPub