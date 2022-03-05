import React from "react";
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from "../constants/Colors";
import Typography from "../constants/Typography"

function CategoriesItems({item , onSelected}){ 

    return(
        <View style={styles.categoriesStyles}>
            <TouchableOpacity
            style={{...styles.categoriesConteiner, backgroundColor: item.color}}
            onPress={() => onSelected(item)}
            >
                <View>
                    <Text style={styles.textStyle}> {item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>

      )
}


 const styles = StyleSheet.create({
     categoriesConteiner: {
         flex: 1,
         borderRadius: 10,

         shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.48,
          shadowRadius: 11.95,

          elevation: 18,

         alignItems: 'center',
         justifyContent: 'center',
         padding: 8

     },
     categoriesStyles: {
      flex: 1,
      borderRadius: 6,
      margin: 15,
      height: 150,
     },
      textStyle: {
        fontFamily: Typography.titleFont,
        fontSize: 30
         
      }
 })

export default CategoriesItems
