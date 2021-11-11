import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import Firebase from "@database/firebase";
const db = Firebase.firestore();

export default function Phrases({ navigation }) {
  const initalState = {
    phrases: "",
  };

  const [state, setState] = useState(initalState);

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const savePhrase = async () => {
    await db.collection("phrases").doc().set(state);
    //navigation.navigate('Bienvenido');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerIn}>
        {<Text style={styles.titulo}> Add Phrases </Text>}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="New Phrase"
            onChangeText={(value) => handleChange("phrases", value)}
            value={state.phrases}
          />
        </View>
        <View>
          <Pressable style={styles.button} onPress={() => savePhrase()}>
            <Text style={styles.text}>SAVE</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
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
