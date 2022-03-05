import React from "react";
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from "../constants/Colors";
import Typography from "../constants/Typography"

function DetailItems({item , onSelected}){ 

    return(
        <View style={styles.detailStyles}>
            <TouchableOpacity
            style={styles.detailConteiner}
            onPress={() => onSelected(item)}
            >
                <View  style={styles.detailStylesConteiner}>
                    <Text style={styles.textStyleTitle}> {item.name}</Text>
                    <Text style={styles.textStyle}> Unidad: {item.measure}</Text>
                    <Text style={styles.textStyle}> Stock: {item.stockAmount}</Text>
                    <Text style={styles.textStyle}> Precio: {item.price}</Text>
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
        fontSize: 20
         
      },
      textStyle: {
        fontFamily: Typography.titleFont,
        fontSize: 15
         
      },
      detailStylesConteiner: {
        

      }
 })

export default DetailItems
