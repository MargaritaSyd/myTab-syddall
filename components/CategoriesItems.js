import React from "react";
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import styles from "./AddItems/styles";
import Colors from "../constants/Colors";

function CategoriesItems({item , onSelected}){ 

    return(
        <View>
            <TouchableOpacity
            style={{...styles.categoriesConteiner, backgroundColor: item.color}}
            onPress={() => onSelected(item)}
            >
                <View>
                    <Text> {item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>

      )
}


// const styles = StyleSheet.create({
//     categoriesConteiner: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'

//     }
// })

export default CategoriesItems
