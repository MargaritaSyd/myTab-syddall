import React, {useState} from "react";

import { StyleSheet, Text, View, Dimensions, useWindowDimensions, FlatList } from 'react-native';
import Colors from "../constants/Colors";
import Typography from "../constants/Typography";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import PubList from "../components/PubList";



function MyPubDetailScreen({navigation}){

    const myPub = useSelector(state => state.myPub.myPub);

    const renderItem = (data) => (
        <PubList 
            title = {data.item.title}
            image = {data.item.image}
           // onSelected={()=> navigation.navigate('OnePubDetail')}
        />
    )
    const { width, height } = useWindowDimensions();

    const isPortrait = height  >= width;

    const handleAddPub= () => {
        navigation.navigate('MyPub')
     }
    
        return(
            <View style={isPortrait ? styles.containerHome : styles.containerHomeLandscape}>
            
                <View style={[styles.buttonConteiner , styles.buttonTop]}>
                    <Button title="Agregá un local" style={styles.buttonHome} onPress={handleAddPub}/>
                </View>
                
                <FlatList 
                    data = {myPub}
                    keyExtractor={item => item.id}
                    renderItem= {renderItem}
                />
           
        </View>
    )
}

const styles = StyleSheet.create({
containerHome: {
  padding:30,
  backgroundColor: Colors.backGround,
  flex: 1,
  
},
containerHomeLandscape: {
    //padding:50,
    //padding: Dimensions.get('window').width >= 400 ? 100 : 50,
 
    marginLeft: '20%',
    backgroundColor: Colors.backGround,
    flex: 1
},
textHome: {
    color: Colors.primary,
    fontFamily: Typography.titleFont,
    fontSize: 50
},
buttonHome: {
    marginTop: 5,
    marginBottom: 5,
    fontFamily: Typography.titleFont,
    fontSize: Dimensions.get('window').width >= 600 ? 25 : 22,
    color: Colors.backGround,
    

},
buttonConteiner: {
    marginBottom: 10,
    marginLeft: 15,
    width: 300,
    maxWidth: '80%',
    marginTop: 10

},
buttonTop: {
    marginTop: 20
}
})




export default MyPubDetailScreen