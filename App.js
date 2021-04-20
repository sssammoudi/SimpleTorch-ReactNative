import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import Torch from "react-native-torch"

function App() {
  PressOn = () => {
    Torch.switchState(true)
  }

  PressOff = () => {
    Torch.switchState(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Simple Torch App</Text>
      <TouchableOpacity style={styles.button} onPress={PressOn}>
        <Text style={styles.textBtn}>On</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={PressOff}>
        <Text style={styles.textBtn}>Off</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff"
  },
  header: {
    fontSize: 20,
    color: "#000",
    marginBottom: 10
  },
  button: {
    height: 50,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#161f3d",
    marginTop: 10,
    color: "#fff"
  },
  textBtn: {
    color: "#fff"
  }
})

export default App
