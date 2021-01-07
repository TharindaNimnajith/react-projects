import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import colors from '../config/colors'

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}/>
      <View style={styles.deleteIcon}/>
      <Image source={require('../assets/chair.jpg')}
             styles={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30
  },
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})

export default ViewImageScreen
