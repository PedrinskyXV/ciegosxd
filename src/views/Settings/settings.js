import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Settings({route,navigation}) {
  const {nombre,nivel} = route.params;
    return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <Text>Nombre: {JSON.stringify(nombre)}</Text>
      <Text>Codigo: {JSON.stringify(nivel)}</Text>
      <Button
        title="Home de app"
        onPress={()=>navigation.navigate('Home')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:25,
    color: 'cyan'
  }
});