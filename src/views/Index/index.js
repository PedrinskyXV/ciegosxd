import React, { useContext } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import s from "@assets/style/estilos";
import { Drawer } from "react-native-paper";

import Firebase from "@database/firebase";
import {} from "firebase/firestore";
import { AuthenticatedUserContext } from "@navigation/AuthenticatedUserProvider";

const db = Firebase.firestore();
const auth = Firebase.auth().currentUser;

export default function Index({ navigation }) {
  const [active, setActive] = React.useState("");
  const { user } = useContext(AuthenticatedUserContext);

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
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.error("Error al actualizar el nivel: ", error);
      });
  };

  return (
    <ScrollView style={s.container}>
      <View style={s.logoContainer}>
        <Image
          style={s.logoImg}
          source={require("@images/logo_transparent.png")}
        />
      </View>

      <View>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          ¿Qué experiencia tiene con el sistema braille?
          {"\n"}
        </Text>
        <Text>{"\n"}</Text>
        <Text>{"\n"}</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => saveNivel("Ninguna")}
        >
          <Text style={styles.btnText}>
            <Text style={styles.enfasis}>Ninguna</Text>, no tengo ni idea de
            este sistema.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => saveNivel("Poca")}>
          <Text style={styles.btnText}>
            <Text style={styles.enfasis}>Poca</Text>, conozco algunos elementos
            de este sistema.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => saveNivel("Suficiente")}
        >
          <Text style={styles.btnText}>
            <Text style={styles.enfasis}>Suficiente</Text>, conozco lo más
            básico de este sistema.
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF1F4",
    alignSelf: "center",
  },
  enfasis: {
    fontWeight: "600",
  },
  text: {
    color: "#252430",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 24,
    marginTop: 1,
    width: 260,
    fontFamily: "sans-serif",
  },
  btn: {
    width: 275,
    marginTop: 20,
    backgroundColor: "#F6E487",
    padding: 15,
    borderRadius: 50,
  },
  btnText: {
    color: "#252430",
    fontSize: 14,
    width: 260,
    fontFamily: "sans-serif",
  },
});
