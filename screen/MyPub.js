import React, {useState} from "react";

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import Typography from "../constants/Typography";
import Button from "../components/Button";
import Input from "../components/Input";
import { addMyPub } from "../store/actions/myPub.action";




function MyPub({navigation}){
    const dispatch = useDispatch()
    const [title, setTitle] = useState();
    const handleSavePub = () => {
        dispatch(addMyPub(title))
        navigation.navigate('Home') //navigation.push("Home") podría volver atrás
    }
   
        return(
            <ScrollView>
                <View style={styles.containerHome}>
                    <Text> Titulo</Text>
                    <Input>
                        value={title}
                        onChangeText={setTitle}
                    </Input>
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
    
    
})
  



export default MyPub