import React, { useContext } from "react";

import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

import { Appbar, Avatar, Text } from "react-native-paper";
import s from "@assets/style/estilos";

import Firebase from "@database/firebase";
import { AuthenticatedUserContext } from "@navigation/AuthenticatedUserProvider";

const auth = Firebase.auth();
const { user, setUser } = useContext(AuthenticatedUserContext);

const nivel = () => {
  if (user.Nivel == "Poco"){
    navigation.navigate("Phase2")
  }
  if (user.Nivel == "Ninguna"){
    navigation.navigate("Phase1")
  }
  if (user.Nivel == "Suficiente"){
    navigation.navigate("Phase3")
  }
}

export default function Home({ navigation }) {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const { user } = useContext(AuthenticatedUserContext);

  return (
    <ScrollView style={{backgroundColor:"#EAF1F4"}}>

      <Appbar.Header style={s.navbar}>
        <Appbar.Content title="Bienvenido" subtitle={user.User.email} />
        <Appbar.Action icon="logout" onPress={handleSignOut} />
        <Appbar.Action icon="account-circle" onPress={() => {
          navigation.navigate("Perfil")
        }} />
      </Appbar.Header>

      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate("Diccionario", {
              nivel: "Nada",
            })
          }
        >
          <Avatar.Icon size={100} icon="book-alphabet" color="#e84444" style={styles.opcLogo}/>
          <Text style={styles.opcTxt}>Diccionario</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Diccionario")}
        >
          <Avatar.Icon size={100} icon="pencil-ruler" color="#e84444" style={styles.opcLogo}/>
          <Text style={styles.opcTxt}>Practica</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => nivel()}>
          <Avatar.Icon size={100} icon="ab-testing" color="#e84444" style={styles.opcLogo}/>
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
          <Avatar.Icon size={100} icon="table-account" color="#e84444" style={styles.opcLogo}/>
          <Text style={styles.opcTxt}>Ver Avance</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Recursos")}
        >
          {/* <Image
            style={styles.opcLogo}
            source={require("@images/letters_and_numbers.png")}
          /> */}
          <Avatar.Icon size={100} icon="home-floor-1" color="#e84444" style={styles.opcLogo}/>
          <Text style={styles.opcTxt}>Recursos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 170,
    height: 170,    
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  opcLogo: {
    backgroundColor: "#e8d054",
    marginBottom: 15,
  },
  opcTxt: {
    fontWeight: "600",
    fontFamily: "sans-serif",
    textTransform: "uppercase",
    fontSize: 16,
  },
});
