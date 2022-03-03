import React from "react";
import { View, TouchableOpacity, Text} from 'react-native';
import styles from "./AddItems/styles";
import Colors from "../constants/Colors";

function CategoriesItems({item , onSelected}){ 

    return(
        <View>
            <TouchableOpacity
            style={{backgroundColor: item.color}}
            onPress={() => onSelected(item)}
            >
                <View>
                    <Text> {item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>

      )
}




export default CategoriesItems
