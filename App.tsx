import Button from './src/Button'
import React from 'react';
import { View, Alert } from 'react-native';

const App = () => {
  return <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
    <Button
      style={{ padding: 20 }}
      onPress={() => Alert.alert('Button Clicked!')}
    >Button</Button>
  </View>
}

export default App;
