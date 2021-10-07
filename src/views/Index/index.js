import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Index({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ¿Qué experiencia tiene con el sistema braille?
        {"\n"}        
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Inicio", {
            nivel: "Nada",
          })
        }
      >        
        <Text style={styles.btnText}><Text style={styles.enfasis}>Ninguna</Text>, no tengo ni idea de este sistema.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Inicio", {
            nivel: "Poca",
          })
        }
      >
        <Text style={styles.btnText}><Text style={styles.enfasis}>Poca</Text>, conozco algunos elementos de este sistema.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          navigation.navigate("Inicio", {
            nivel: "Suficiente",
          })
        }
      >
        <Text style={styles.btnText}><Text style={styles.enfasis}>Suficiente</Text>, conozco lo más básico de este sistema.</Text>
      </TouchableOpacity>          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF1F4",
    alignItems: "center",
    justifyContent: "center",    
  },
  enfasis:{
    fontWeight: "bold"
  },
  text: {
    color: "#252430",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 1,    
    width: 200,
    fontFamily: 'sans-serif'
  },
  btn: {
    width: 200,
    marginTop: 20,
    backgroundColor: "#F6E487",
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    color: "#252430",
    fontSize: 14,
    fontFamily: 'sans-serif'    
  },
});
