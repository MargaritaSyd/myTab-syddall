import React from "react";
import { View, Image , StyleSheet} from 'react-native';

function Logo (){
    return(
        <View style={styles.imageLogoConteiner}>
                <Image  style={styles.imageLogo} source={require('../../public/logo.png')}/>
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
        justifyContent: 'center'
      }
})

export default Logo