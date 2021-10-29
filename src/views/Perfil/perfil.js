import React, { useState, useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import { Text, Button, Avatar, RadioButton, Divider } from "react-native-paper";
import s from "@assets/style/estilos";

import Firebase from "@database/firebase";
import {} from "firebase/firestore";
import { AuthenticatedUserContext } from "@navigation/AuthenticatedUserProvider";

const db = Firebase.firestore();
const auth = Firebase.auth();

const Perfil = (props) => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [value, setValue] = React.useState(user.Nivel);

  const saveNivel = async (newNivel) => {
    //console.log(newNivel);
    await db
      .collection("users")
      .doc(user.User.email)
      .update({
        nivel: newNivel,
      })
      .then(() => {
        console.log("Nivel actualizado.");
        setUser({ User: user.User, conNivel: true, Nivel: newNivel });        
        props.navigation.navigate("Home");        
      })
      .catch((error) => {
        console.error("Error al actualizar el nivel: ", error);
      });
  };

  return (
    <ScrollView style={s.container}>
      <View style={s.containerCentrado}>
        <Avatar.Text
          size={150}
          label={user.User.email.charAt(0).toUpperCase()}
          color="#e8d054"
          style={{ backgroundColor: "#e84444" }}
        />
        <Text style={styles.text}>{user.User.email}</Text>
      </View>

      <View>
        <Text style={styles.text}>Nivel Actual:</Text>

        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View style={styles.row}>
            <RadioButton value="Ninguno" />
            <Text>Ninguno</Text>
          </View>
          <Divider />
          <View style={styles.row}>
            <RadioButton value="Poco" />
            <Text>Poco</Text>
          </View>
          <Divider />
          <View style={styles.row}>
            <RadioButton value="Suficiente" />
            <Text>Suficiente</Text>
          </View>          
        </RadioButton.Group>
      </View>

      <View style={{marginVertical: 25}}>
        <Button
            color="#e8d054"
          icon="refresh"
          mode="contained"
          onPress={() => saveNivel(value)}
          style={s.btnPerfil}
        >
          Actualizar
        </Button>
      </View>
    </ScrollView>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "sans-serif",
    marginVertical: 15,
    fontWeight: "600",
  },
});
