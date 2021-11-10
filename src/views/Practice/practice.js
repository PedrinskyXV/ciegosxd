import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";

import Firebase from "@database/firebase";
const db = Firebase.firestore();
const datos = [];
let palabra = "";
var pos = 0;
let word = "";
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function Practice({ navigation }) {
  const [state, setState] = useState({
    word: "",
  });

  useEffect( () =>{

    db.collection("words").get().then((querySnapshot) => {
      //const data = [];
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.data());
          datos.push(doc.data().words);
      });
      console.log(datos);
      pos = getRandomInt(0, datos.length);
      setState({word: datos[pos]});
    });
  }, []);
  console.log(state);
  return (
    <View style={styles.container}>
      <Text>Hola</Text>
      <Text>{state.word}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerIn: {
    flex: 0.3,
    width: "70%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageFondo: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8,
  },
  image: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
    opacity: 0.8,
  },
  titulo: {
    fontSize: 25,
    color: "#800000",
    fontWeight: "bold",
    textShadowColor: "#CDCDCD",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginBottom: 50,
  },
  inputGroup: {
    padding: 2,
    marginTop: 25,
    borderRadius: 4,
    alignSelf: "stretch",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginTop: 25,
  },
  textRecord: {
    fontSize: 16,
    alignSelf: "flex-end",
    lineHeight: 21,
    fontWeight: "bold",
    //letterSpacing: 0.25,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    alignSelf: "center",
  },
  footer: {
    fontSize: 15,
    color: "white",
    marginTop: 100,
    textAlign: "center",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 7,
  },
});
