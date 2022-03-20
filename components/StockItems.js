import React from "react";
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from "../constants/Colors";
import Typography from "../constants/Typography"
import Input from "./Input";

function StockItems({item}){ 

    return(
        <View style={styles.detailStyles}>
            <TouchableOpacity
            style={styles.detailConteiner}
           // onPress={() => onInventory(item)}
            >
                <View  style={styles.detailStylesConteiner}>
                    <Text style={styles.textStyleTitle}> {item.name} </Text>
                    <View style={styles.inputConteiner}>
                        <Input style={styles.inventoryInput} 
                        
                        />
                        <Text style={styles.measureStyle}>{item.measure} </Text>
                    </View>
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
      //height: 100,

      

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
      detailStylesConteiner: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-between"

      },
      inventoryInput: {
          
          color: Colors.backGround,
          fontFamily: Typography.titleFont,
          fontSize: 25,
               
      },
      inputConteiner: {
          flexDirection: "row",
          justifyContent: "flex-end",
          marginRight: 5
      },
      measureStyle: {
        fontFamily: Typography.titleFont,
        fontSize: 25,
      }
 })

export default StockItems
