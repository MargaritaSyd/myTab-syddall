import { StyleSheet, Text, View, TextInput, Button, FlatList, Modal, SectionList } from 'react-native';

const styles = StyleSheet.create({ 
    item: {
        padding: 20,
        marginVertical: 20,
        borderColor: '#a2532a',
        borderWidth: 1,
        //flexDirection: 'row',
       // alignItems: 'center',
        justifyContent: 'space-between',
        color: "#a2532a"
      },
    textList: {
      color: "#a2532a"
      },
    buttonsStyles: {
      flexDirection: 'row',
      justifyContent: 'space-between',
        
    },
    stockMeasure: {
      flexDirection: 'row'
    }
})

export default styles