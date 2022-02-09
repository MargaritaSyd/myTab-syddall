import React from "react";
import { Text, View, Button, Modal } from 'react-native';

function ModalDelete({modalVisible , itemSelected , handleConfirmDelete}){ 
    return (
        <Modal animationType='slide' visible={modalVisible}>
          <View>
            <View>
              <Text> Estas seguro? </Text>
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


export default ModalDelete