//Import Dependencies
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//Types for React Navigation
import { RootStackParams } from '../App';

const Detials: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text>Detials Page</Text>
    </View>
  )
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Detials;