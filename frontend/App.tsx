/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  NavigationContainer,
  NavigationRouteContext,
} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AuthStackNavigator from './src/navigations/stack/AuthStackNavigator';
import RootNavigator from './src/navigations/root/RootNavigator';

function App(): JSX.Element {
  // const [name, setName] = useState('');

  // const handleChangeInput = (text: string) => {
  //   console.log(text);
  //   setName(text);
  // };
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'yellow',
//     // margin: 10, //숫자나 퍼센트로 마진 조정, 픽셀 x
//     // marginHorizontal: 10,
//     // marginVertical: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 2,
//     borderColor: 'black',
//     height: 100,
//     width: 100,
//   },
//   inputContainer: {
//     flex: 1,
//     flexDirection: 'row', //가로로 위치
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;

{
  /* <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>이름</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={handleChangeInput}
          />
        </View>
        <Button title="버튼이름" onPress={() => console.log('클릭됨!')} />
      </SafeAreaView> */
}
