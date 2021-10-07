import React from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid, TouchableOpacity, Image} from 'react-native';

export default function Home({navigation, route}) {
  const {nivel} = route.params;
  const showToast = () => {
    ToastAndroid.show(nivel, ToastAndroid.SHORT);
  };
  return (
    <View style={styles.container}>
      <Button title="Toggle Toast" onPress={() => showToast()} />

      <View style={styles.row}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Diccionario", {
            nivel: "Nada",
          })
        }
      >
        <Image
        style={styles.opcLogo}
        source={require('../../../assets/images/dictionary.png')}
        />        
        <Text style={styles.opcTxt}>Diccionario</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Practica", {
            nivel: "Nada",
          })
        }
      >
        <Image
        style={styles.opcLogo}
        source={require('../../../assets/images/learning.png')}
        />        
        <Text style={styles.opcTxt}>Practica</Text>
      </TouchableOpacity>
      </View>
      
      <View style={styles.row}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Home", {
            nivel: "Nada",
          })
        }
      >
        <Image
        style={styles.opcLogo}
        source={require('../../../assets/images/test.png')}
        />        
        <Text style={styles.opcTxt}>Desafio</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Home", {
            nivel: "Nada",
          })
        }
      >
        <Image
        style={styles.opcLogo}
        source={require('../../../assets/images/advance.png')}
        />        
        <Text style={styles.opcTxt}>Ver Avance</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF1F4",
    alignContent: "space-around",
    justifyContent: "center",
    fontFamily: 'sans-serif',
    alignItems: "center"    
  },
  btn: {
    width: 150,
    height: 150,    
    backgroundColor: "#FF704D",
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20        
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  opcLogo: {
    width: 75,
    height: 75,
    marginBottom: 10
  },
  opcTxt: {
    fontWeight: "bold",
    fontFamily: 'sans-serif',
    textTransform: "uppercase"
  }
});
