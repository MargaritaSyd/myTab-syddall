import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Colors from "../constants/Colors";
import Typography from "../constants/Typography"

function PubList({title , image}){ 

    return(
        <View style={styles.detailStyles}>
            <TouchableOpacity
            style={styles.detailConteiner}
           // onPress={onSelected}
            >
                <Image source={{uri: image}} />
                <View  style={styles.detailStylesConteiner}>
                    <Text style={styles.textStyleTitle}> {title}</Text>
                </View>
            </TouchableOpacity>
        </View>

      )
}


 const styles = StyleSheet.create({
     detailConteiner: {
         flex: 1,
         borderRadius: 10,
         alignItems: 'flex-start',
         justifyContent: 'flex-start',
         padding: 2,
         borderColor: Colors.backGround,
         borderWidth: 2,
         backgroundColor: Colors.primary,

     },
     detailStyles: {
      flex: 1,
      borderRadius: 6,
      margin: 15,
      height: 100,

      

     },
      textStyleTitle: {
        fontFamily: Typography.titleFont,
        fontSize: 20,
        color: Colors.buttonBackGround,
        fontWeight: 'bold'
         
      },
      textStyle: {
        fontFamily: Typography.titleFont,
        fontSize: 15,
        color: Colors.buttonBackGround,
        fontWeight: 'bold'
      },
     
 })

export default PubList
