import React from "react";
import { Text, View, Button, Modal, StyleSheet } from 'react-native';

function ModalDelete({modalVisible , itemSelected , handleConfirmDelete}){ 
    return (
        <Modal animationType='slide' visible={modalVisible}>
          <View>
            <View style={styles.modalConteiner}>
              <Text style={styles.modalText}> Querés eliminar este item de tu stock? </Text>
              <Text> {itemSelected.value} </Text>
            </View>
            <View>
              <Button
              onPress={handleConfirmDelete}
              title='Confirmar'
              />
            </View>
          </View>
      </Modal>

    )
}

const styles = StyleSheet.create({
  modalConteiner: {
    backgroundColor: "#070c32"
  },
  modalText: {
    color: '#dbec66'
  }

})
export default ModalDelete