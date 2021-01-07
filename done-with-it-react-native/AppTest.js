import React from 'react'
import {useDeviceOrientation, useDimensions} from '@react-native-community/hooks'
import {
  Alert,
  Button,
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native'

export default function App() {
  console.log('React Native')

  let x = 5
  console.log(x.toString())

  console.log(require('./app/assets/icon.png'))

  const handlePressed = () => {
    console.log('Text Pressed 3')
  }

  const handleImagePressed1 = () => {
    console.log('Image Pressed TouchableWithoutFeedback')
  }

  const handleImagePressed2 = () => {
    console.log('Image Pressed TouchableOpacity')
  }

  const handleImagePressed3 = () => {
    Alert.prompt(
      'My Title',
      'My message',
      (text) => {
        console.log(text)
      }
    )
    console.log('Image Pressed TouchableHighlight')
  }

  const onPressYes = () => {
    console.log('Yes Pressed')
  }

  const onPressNo = () => {
    console.log('No Pressed')
  }

  const handleImagePressed4 = () => {
    console.log('Image Pressed TouchableNativeFeedback')
    Alert.alert(
      'My Title',
      'My message',
      [
        {
          text: 'Yes',
          onPress: onPressYes
        },
        {
          text: 'No',
          onPress: onPressNo
        }
      ]
    )
  }

  const handleButtonTapped = () => {
    console.log('Button Tapped')
    alert('Button Tapped')
  }

  const containerStyle = {
    backgroundColor: 'orange'
  }

  console.log(Dimensions.get('screen'))
  console.log(Dimensions.get('window'))

  console.log(useDimensions())
  console.log(useDeviceOrientation())

  const {landscape} = useDeviceOrientation()

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style='auto'/>
    // </View>
    // <View style={{
    //   backgroundColor: 'white',
    //   flex: 1,
    //   flexDirection: 'row',
    //   // flexDirection: 'row-reverse',
    //   // flexDirection: 'column',
    //   // flexDirection: 'column-reverse',
    //   justifyContent: 'center',
    //   // justifyContent: 'end',
    //   // justifyContent: 'start',
    //   // justifyContent: 'space-around',
    //   // justifyContent: 'space-evenly',
    //   // justifyContent: 'space-between',
    //   // alignItems: 'baseline',
    //   // alignItems: 'flex-end',
    //   // alignItems: 'flex-start',
    //   // alignItems: 'stretch',
    //   alignItems: 'center'
    // }}>
    //   {/*<View style={{*/}
    //   {/*  backgroundColor: 'blue',*/}
    //   {/*  flex: 2*/}
    //   {/*}}/>*/}
    //   {/*<View style={{*/}
    //   {/*  backgroundColor: 'gold',*/}
    //   {/*  flex: 1*/}
    //   {/*}}/>*/}
    //   {/*<View style={{*/}
    //   {/*  backgroundColor: 'tomato',*/}
    //   {/*  flex: 1*/}
    //   {/*}}/>*/}
    //   <View style={{
    //     backgroundColor: 'blue',
    //     width: 100,
    //     height: 100,
    //     alignSelf: 'flex-start'
    //   }}/>
    //   <View style={{
    //     backgroundColor: 'gold',
    //     width: 100,
    //     height: 200
    //   }}/>
    //   <View style={{
    //     backgroundColor: 'tomato',
    //     width: 100,
    //     // height: 300
    //     height: 300
    //   }}/>
    // </View>
    // <View style={{
    //   backgroundColor: 'white',
    //   flex: 1,
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   alignContent: 'center',
    //   flexWrap: 'wrap'
    // }}>
    //   <View style={{
    //     backgroundColor: 'blue',
    //     width: 100,
    //     // flexBasis: 400,
    //     // flexShrink: 1,
    //     // flex: -1,
    //     // height: 300
    //     // flex: 1,
    //     // flexGrow: 1,
    //     height: 100
    //   }}/>
    //   <View style={{
    //     backgroundColor: 'gold',
    //     width: 100,
    //     height: 100,
    //     // position: 'relative',
    //     position: 'absolute',
    //     // top: 20,
    //     // top: -20,
    //     // bottom: 20,
    //     // bottom: -20,
    //     // right: 20,
    //     // right: -20,
    //     // left: 20,
    //     left: -20
    //   }}/>
    //   <View style={{
    //     backgroundColor: 'tomato',
    //     width: 100,
    //     height: 100
    //   }}/>
    //   {/*<View style={{*/}
    //   {/*  backgroundColor: 'grey',*/}
    //   {/*  width: 100,*/}
    //   {/*  height: 100*/}
    //   {/*}}/>*/}
    //   {/*<View style={{*/}
    //   {/*  backgroundColor: 'greenyellow',*/}
    //   {/*  width: 100,*/}
    //   {/*  height: 100*/}
    //   {/*}}/>*/}
    // </View>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{
          backgroundColor: 'red',
          width: '100%',
          height: landscape ? '100%' : '0%'
        }}>
          <Text>View</Text>
        </View>
        <View style={containerStyle}>
          <Text>1111111111111111</Text>
          <StatusBar style='auto'/>
        </View>
        <View style={styles.container}>
          <Text>22222222222222222222</Text>
        </View>
        <View style={[styles.container, containerStyle]}>
          <Text>33333333333333333333333</Text>
        </View>
        <Text>
          Open up App.js to start working on your app!
        </Text>
        <Text>
          Open up App.js to start working on your app!
          I am going to make this a very long text.
          Now I am going to make this even longer to see what happens!
        </Text>
        <Text numberOfLines={1}>
          Open up App.js to start working on your app!
          I am going to make this a very long text.
          Now I am going to make this even longer to see what happens!
        </Text>
        <Text numberOfLines={2}>
          Open up App.js to start working on your app!
          I am going to make this a very long text.
          Now I am going to make this even longer to see what happens!
        </Text>
        <Text onPress={() => console.log('Text Pressed 1')}>
          Open up App.js to start working on your app!
        </Text>
        <Text onPress={() => {
          console.log('Text Pressed 2')
        }}>
          Open up App.js to start working on your app!
        </Text>
        <Text onPress={handlePressed}>
          Open up App.js to start working on your app!
        </Text>
        <Image source={require('./app/assets/icon.png')}/>
        <TouchableWithoutFeedback onPress={handleImagePressed1}>
          <Image blurRadius={2}
                 fadeDuration={1000}
                 source={{
                   width: 200,
                   height: 100,
                   uri: 'https://picsum.photos/200/100'
                 }}/>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={handleImagePressed2}>
          <Image blurRadius={0}
                 fadeDuration={1000}
                 source={{
                   width: 100,
                   height: 100,
                   uri: 'https://picsum.photos/100'
                 }}/>
        </TouchableOpacity>
        <TouchableHighlight onPress={handleImagePressed3}>
          <Image blurRadius={0}
                 fadeDuration={1000}
                 source={{
                   width: 100,
                   height: 100,
                   uri: 'https://picsum.photos/100'
                 }}/>
        </TouchableHighlight>
        <TouchableNativeFeedback onPress={handleImagePressed4}>
          <Image blurRadius={0}
                 fadeDuration={1000}
                 source={{
                   width: 100,
                   height: 100,
                   uri: 'https://picsum.photos/100'
                 }}/>
        </TouchableNativeFeedback>
        <View style={{
          width: 200,
          height: 70,
          backgroundColor: 'blue'
        }}/>
        <Button onPress={handleButtonTapped}
                title={'Click Me'}
                color='orange'/>
      </ScrollView>
      <StatusBar style='auto'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  scrollView: {
    marginHorizontal: 20
  }
})
