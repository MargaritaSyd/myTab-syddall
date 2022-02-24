import React from "react";
import { View, Image , StyleSheet} from 'react-native';
import Colors from "../../constants/Colors";

function Logo (){
    return(
        <View>
            <View style={styles.imageLogoConteiner}>
                    <Image  style={styles.imageLogo} source={require('../../public/logo.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageLogo: {
        width: 40,
        height: 'auto',
        padding: 50,
        alignItems: 'center'
        
    
      },
    imageLogoConteiner: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',

      },
    
})

export default Logo